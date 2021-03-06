import { AwsProvider, AutoScaling, ECS as ecs, EC2 as ec2, IAM as iam, DataSources } from '@cdktf/provider-aws';
import { Token } from 'cdktf';
import { Construct } from 'constructs';
import { AmazonLinuxGeneration, BottleRocketImage, EcsOptimizedAmi, IEcsMachineImage } from '.';
import * as awsEcs from './imports/modules/terraform-aws-modules/ecs/aws';
import * as awsVpc from './imports/modules/terraform-aws-modules/vpc/aws';

const AZ = DataSources.DataAwsAvailabilityZones;

export class ClusterProps {
  /**
   * The AWS region to deploy.
   */
  readonly region?: string;
  readonly name?: string;
  /**
   * instance type for the default capacity
   * @default t3.large
   */
  readonly instanceType?: string;
  /**
   * VPC subnet IDs for the container instances
   * @default - private subnets of a new VPC.
   */
  readonly vpcSubnets?: string[];
}

export interface AsgCapacityOptions {
  readonly maxCapacity?: number;
  readonly minCapacity?: number;
  readonly desiredCapacity?: number;
  readonly machineImage?: IEcsMachineImage;
}

export class Cluster extends Construct {
  readonly region: string;
  readonly clusterName: string;
  readonly vpc?: any;
  readonly vpcId?: string;
  private readonly vpcSubnets: string[];
  private readonly props: ClusterProps;
  constructor(scope: Construct, id: string, props: ClusterProps = {}) {
    super(scope, id);

    this.props = props;
    this.region = props.region ?? 'us-east-1';
    new AwsProvider(this, 'aws', { region: this.region });

    this.clusterName = props.name ?? `${id}-cluster`;

    // no private subnets given
    if (!props.vpcSubnets) {
      const vpc = this._createVpc();
      this.vpc = vpc;
      this.vpcId = Token.asString(vpc.vpcIdOutput);
      this.vpcSubnets = Token.asList(vpc.privateSubnetsOutput);
    } else {
      this.vpcSubnets = props.vpcSubnets!;
    }

    // cluster
    new awsEcs.TerraformAwsModulesEcsAws(this, 'Cluster', {
      name: this.clusterName,
    });
  }
  private _createContainerServiceforEC2Role(id: string): iam.IamRole {
    const role = new iam.IamRole(this, `${id}-ecs-instance-role`, {
      name: `${id}-ecs-instance-role`,
      // name: 'ecs-instance-role',
      assumeRolePolicy: JSON.stringify({
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Sid: '',
            Principal: {
              Service: 'ec2.amazonaws.com',
            },
          },
        ],
      }),
    });
    new iam.IamPolicyAttachment(this, `${id}AmazonEC2ContainerServiceforEC2RoleAttachment`, {
      name: 'AmazonEC2ContainerServiceforEC2RoleAttachment',
      policyArn: 'arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
      roles: [role.name!],
    });
    new iam.IamPolicyAttachment(this, `${id}AmazonSSMManagedInstanceCoreAttachment`, {
      name: 'AmazonSSMManagedInstanceCoreAttachment',
      policyArn: 'arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore',
      roles: [role.name!],
    });
    return role;
  }
  private _createIamInstanceProfile(id: string, roleName: string): iam.IamInstanceProfile {
    return new iam.IamInstanceProfile(this, `${id}InstanceProfile`, {
      role: roleName,
    });
  }
  private _createVpc() {
    const vpc = new awsVpc.TerraformAwsModulesVpcAws(this, 'Vpc', {
      cidr: '10.0.0.0/16',
      azs: new AZ(this, 'AZs', {
        state: 'available',
      }).names,
      publicSubnets: ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
      privateSubnets: ['10.0.11.0/24', '10.0.12.0/24', '10.0.13.0/24'],
      singleNatGateway: true,
      enableNatGateway: true,
      oneNatGatewayPerAz: false,
    });
    return vpc;
  }
  private _createLaunchTemplate(id: string, instanceProfileArn: string, image?: IEcsMachineImage): ec2.LaunchTemplate {
    return new ec2.LaunchTemplate(this, `${id}LT`, {
      imageId: image?.amiId ?? new EcsOptimizedAmi(this, {
        generation: AmazonLinuxGeneration.AMAZON_LINUX_2,
      }).amiId,
      iamInstanceProfile: { arn: instanceProfileArn },
      instanceType: this.props.instanceType ?? 't3.large',
    });
  }
  public addAsgCapacity(id: string, options: AsgCapacityOptions) {
    const instanceRole = this._createContainerServiceforEC2Role(id);
    const instanceProfile = this._createIamInstanceProfile(id, instanceRole.name!);
    const lt = this._createLaunchTemplate(id, instanceProfile.arn, options.machineImage);
    // default userData
    let userData = `#!/bin/bash\necho ECS_CLUSTER=${this.clusterName} > /etc/ecs/ecs.config`;
    // if bottlerocket image
    if (options.machineImage && isBottleRocketImage(options.machineImage)) {
      userData = `[settings.ecs]\ncluster = "${this.clusterName}"`;
    }

    let b64userdata = Buffer.from(userData).toString('base64');
    lt.addOverride('user_data', b64userdata);

    const minCapacity = options.minCapacity ?? 0;
    const desiredCapacity = options.desiredCapacity ?? minCapacity;
    const maxCapacity = options.maxCapacity ?? (desiredCapacity > 0) ?
      desiredCapacity : 1;

    const asg = new AutoScaling.AutoscalingGroup(this, `${id}-ASG`, {
      maxSize: maxCapacity,
      desiredCapacity: desiredCapacity,
      minSize: minCapacity,
      vpcZoneIdentifier: this.vpcSubnets,
      launchTemplate: {
        id: lt.id,
        version: '$Latest',
      },
    });
    new ecs.EcsCapacityProvider(this, `${id}EcsCapacityProvider`, {
      name: `cp-${id}`,
      autoScalingGroupProvider: {
        autoScalingGroupArn: asg.arn,
      },
    });
  }
}

function isBottleRocketImage(image: IEcsMachineImage) {
  return image instanceof BottleRocketImage;
}
