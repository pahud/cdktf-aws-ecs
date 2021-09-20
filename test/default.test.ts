import 'cdktf/lib/testing/adapters/jest';
import { DataAwsAvailabilityZones, AutoscalingGroup, EcsCapacityProvider } from '@cdktf/provider-aws';
import { TerraformStack, Testing } from 'cdktf';
import { Cluster } from '../src';

Testing.setupJest();

describe('Unit testing using snapshots', () => {
  it('should match the snapshot', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');
    expect(
      Testing.synthScope(() => {
        new Cluster(stack, 'Cluster');
      })).toMatchSnapshot();
  });
  it('should plan successfully', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');
    expect(Testing.fullSynth(stack)).toPlanSuccessfully();
  });
  it('should have a cluster', () => {
    expect(Testing.synthScope((scope) => {
      new Cluster(scope, 'Cluster')
        .addAsgCapacity('Capacity', {
          desiredCapacity: 2,
        });
    })).toHaveDataSource(DataAwsAvailabilityZones);
  });
  it('should have an ASG', () => {
    expect(Testing.synthScope((scope) => {
      new Cluster(scope, 'Cluster')
        .addAsgCapacity('Capacity', {
          desiredCapacity: 2,
        });
    })).toHaveResourceWithProperties(AutoscalingGroup, {
      desired_capacity: 2,
      max_size: 2,
      min_size: 0,
    });
  });
  it('should have a capacity provider', () => {
    expect(Testing.synthScope((scope) => {
      new Cluster(scope, 'Cluster')
        .addAsgCapacity('Capacity', {
          desiredCapacity: 2,
        });
    })).toHaveResource(EcsCapacityProvider);
  });
});

