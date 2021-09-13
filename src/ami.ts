import { Construct } from 'constructs';
import { StringParameter } from '.';

export enum AmazonLinuxGeneration {
  AMAZON_LINUX,
  AMAZON_LINUX_2,
}

export enum AmiHardwareType {
  /**
   * Use the standard Amazon ECS-optimized AMI.
   */
  STANDARD = 'Standard',

  /**
   * Use the Amazon ECS GPU-optimized AMI.
   */
  GPU = 'GPU',

  /**
   * Use the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI.
   */
  ARM = 'ARM64',
}

/**
 * Identifies an instance's CPU architecture
 */
export enum InstanceArchitecture {
  /**
   * ARM64 architecture
   */
  ARM_64 = 'arm64',

  /**
   * x86-64 architecture
   */
  X86_64 = 'x86_64',
}

export interface IEcsMachineImage {
  get amiId(): string;
}

export interface EcsOptimizedAmiProps {
  readonly generation?: AmazonLinuxGeneration;
  readonly hwtype?: AmiHardwareType;
}

export class EcsOptimizedAmi implements IEcsMachineImage {
  readonly amiParameterName: string;
  readonly generation: AmazonLinuxGeneration;
  readonly hwType: AmiHardwareType;
  readonly scope: Construct;
  constructor(scope: Construct, props?: EcsOptimizedAmiProps) {
    this.generation = props?.generation ?? AmazonLinuxGeneration.AMAZON_LINUX_2,
    this.hwType = props?.hwtype ?? AmiHardwareType.STANDARD,
    this.scope = scope;
    // set the SSM parameter name
    this.amiParameterName = '/aws/service/ecs/optimized-ami/'
      + (this.generation === AmazonLinuxGeneration.AMAZON_LINUX ? 'amazon-linux/' : '')
      + (this.generation === AmazonLinuxGeneration.AMAZON_LINUX_2 ? 'amazon-linux-2/' : '')
      + (this.hwType === AmiHardwareType.GPU ? 'gpu/' : '')
      + (this.hwType === AmiHardwareType.ARM ? 'arm64/' : '')
      + 'recommended/image_id';
  }
  /**
   * Return the correct image
   */
  get amiId(): string {
    return lookupImage(this.scope, 'EcsOptimizedAmiId', this.amiParameterName);
  }
}

/**
 * Amazon ECS variant
 */
export enum BottlerocketEcsVariant {
  /**
   * aws-ecs-1 variant
   */
  AWS_ECS_1 = 'aws-ecs-1'

}

/**
 * Properties for BottleRocketImage
 */
export interface BottleRocketImageProps {
  /**
   * The Amazon ECS variant to use.
   * Only `aws-ecs-1` is currently available
   *
   * @default - BottlerocketEcsVariant.AWS_ECS_1
   */
  readonly variant?: BottlerocketEcsVariant;

  /**
   * The CPU architecture
   *
   * @default - x86_64
   */
  readonly architecture?: InstanceArchitecture;

  /**
   * Whether the AMI ID is cached to be stable between deployments
   *
   * By default, the newest image is used on each deployment. This will cause
   * instances to be replaced whenever a new version is released, and may cause
   * downtime if there aren't enough running instances in the AutoScalingGroup
   * to reschedule the tasks on.
   *
   * If set to true, the AMI ID will be cached in `cdk.context.json` and the
   * same value will be used on future runs. Your instances will not be replaced
   * but your AMI version will grow old over time. To refresh the AMI lookup,
   * you will have to evict the value from the cache using the `cdk context`
   * command. See https://docs.aws.amazon.com/cdk/latest/guide/context.html for
   * more information.
   *
   * Can not be set to `true` in environment-agnostic stacks.
   *
   * @default false
   */
  readonly cachedInContext?: boolean;
}

/**
 * Construct an Bottlerocket image from the latest AMI published in SSM
 */
export class BottleRocketImage implements IEcsMachineImage {
  private readonly amiParameterName: string;
  /**
   * Amazon ECS variant for Bottlerocket AMI
   */
  private readonly variant: string;

  /**
   * Instance architecture
   */
  private readonly architecture: InstanceArchitecture;

  private readonly scope: Construct;

  // private readonly cachedInContext: boolean;

  /**
   * Constructs a new instance of the BottleRocketImage class.
   */
  public constructor(scope: Construct, props: BottleRocketImageProps = {}) {
    this.scope = scope;
    this.variant = props.variant ?? BottlerocketEcsVariant.AWS_ECS_1;
    this.architecture = props.architecture ?? InstanceArchitecture.X86_64;

    // set the SSM parameter name
    this.amiParameterName = `/aws/service/bottlerocket/${this.variant}/${this.architecture}/latest/image_id`;

    // this.cachedInContext = props.cachedInContext ?? false;
  }

  /**
   * Return the correct image
   */
  get amiId(): string {
    return lookupImage(this.scope, 'BottlerocketAmiId', this.amiParameterName);
  }

  /**
   * Return the correct image
   */
  // public getImage(scope: CoreConstruct): ec2.MachineImageConfig {
  // const ami = lookupImage(scope, this.cachedInContext, this.amiParameterName);

  // return {
  //   imageId: ami,
  //   osType: ec2.OperatingSystemType.LINUX,
  //   userData: ec2.UserData.custom(''),
  // };
  // }
}


function lookupImage(scope: Construct, id: string, parameterName: string) {
  return StringParameter.valueFromLookup(scope, id, parameterName);
}
