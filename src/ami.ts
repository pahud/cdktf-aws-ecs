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

export interface EcsOptimizedAmiProps {
  readonly generation?: AmazonLinuxGeneration;
  readonly hwtype?: AmiHardwareType;
}

export class EcsOptimizedAmi {
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

function lookupImage(scope: Construct, id: string, parameterName: string) {
  return StringParameter.valueFromLookup(scope, id, parameterName);
}
