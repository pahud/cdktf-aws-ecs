# cdktf-aws-ecs

CDKTF construct library for Amazon ECS.

## Usage

The following sample creates:

1. A new VPC
1. Amazon ECS cluster
2. Autoscaling Group capacity provider
3. Autoscaling Group with Launch Template


```ts
import { Cluster } from '@pahud/cdktf-aws-ecs';

// create the cluster
const cluster = new Cluster(stack, 'EcsCluster');

// create the ASG capacity with capacity provider
cluster.addAsgCapacity('ASGCapacity', {
  maxCapacity: 10,
  minCapacity: 0,
  desiredCapacity: 2,
});
```

## Existing VPC subnets

To deploy in any existing VPC, specify the `vpcSubnets.

```ts
cluster.addAsgCapacity('ASGCapacity', {
  vpcSubnets: ['subnet-111','subnet-222','subnet-333' ],
});
```
