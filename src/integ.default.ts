import { App, TerraformStack } from 'cdktf';
import { BottleRocketImage, Cluster } from '.';

const app = new App();

const stack = new TerraformStack(app, 'cdktf-eks-demo');

const cluster = new Cluster(stack, 'EcsCluster');

cluster.addAsgCapacity('DefaultCapacity', {
  maxCapacity: 10,
  minCapacity: 0,
  desiredCapacity: 2,
});

cluster.addAsgCapacity('BRCapacity', {
  maxCapacity: 10,
  minCapacity: 0,
  desiredCapacity: 2,
  machineImage: new BottleRocketImage(stack),
});

app.synth();
