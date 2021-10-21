import 'cdktf/lib/testing/adapters/jest';
import { DataSources, AutoScaling, ECS as ecs } from '@cdktf/provider-aws';
import { TerraformStack, Testing } from 'cdktf';
import { Cluster } from '../src';

const DataAwsAvailabilityZones = DataSources.DataAwsAvailabilityZones;

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
  /**
   * TODO - this requires terraform CLI and AWS credentials.
   */
  // it('should plan successfully', () => {
  //   const app = Testing.app();
  //   const stack = new TerraformStack(app, 'test');
  //   new Cluster(stack, 'Cluster')
  //     .addAsgCapacity('Capacity', {
  //       desiredCapacity: 2,
  //     });
  //   expect(Testing.fullSynth(stack)).toPlanSuccessfully();
  // });
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
    })).toHaveResourceWithProperties(AutoScaling.AutoscalingGroup, {
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
    })).toHaveResource(ecs.EcsCapacityProvider);
  });
});

