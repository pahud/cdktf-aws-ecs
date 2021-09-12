import { DataAwsSsmParameter } from '@cdktf/provider-aws';
import { Construct } from 'constructs';

export class StringParameter {
  static valueFromLookup(scope: Construct, id: string, parameterName: string): string {
    return new DataAwsSsmParameter(scope, id, {
      name: parameterName,
    }).value;
  }
}
