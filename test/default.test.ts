import { TerraformStack, Testing } from 'cdktf';
import { Cluster } from '../src';

Testing.setupJest();
let app = Testing.app();
let stack = new TerraformStack(app, 'test');

describe('Unit testing using snapshots', () => {
  it('should match the snapshot', () => {
    expect(
      Testing.synthScope(() => {
        new Cluster(stack, 'Cluster');
      })).toMatchSnapshot();
  });
});