import { App, TerraformStack } from 'cdktf';
import { Cluster } from '.';

const app = new App();

const stack = new TerraformStack(app, 'cdktf-eks-demo');

const cluster = new Cluster(stack, 'EcsCluster');

cluster.addAsgCapacity('ASGCapacity', {
  maxCapacity: 10,
  minCapacity: 0,
  desiredCapacity: 2,
});

app.synth();
