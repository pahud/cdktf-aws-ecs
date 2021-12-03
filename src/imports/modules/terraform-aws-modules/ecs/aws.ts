// generated by cdktf get
// terraform-aws-modules/ecs/aws
import { TerraformModule } from 'cdktf';
import { Construct } from 'constructs';
export interface TerraformAwsModulesEcsAwsOptions {
  /**
   * List of short names of one or more capacity providers to associate with the cluster. Valid values also include FARGATE and FARGATE_SPOT.
   * @default
   */
  readonly capacityProviders?: string[];
  /**
   * Controls if ECS Cluster has container insights enabled
   */
  readonly containerInsights?: boolean;
  /**
   * Controls if ECS should be created
   * @default true
   */
  readonly createEcs?: boolean;
  /**
   * The capacity provider strategy to use by default for the cluster. Can be one or more.
   * @default
   */
  readonly defaultCapacityProviderStrategy?: { [key: string]: any }[];
  /**
   * Name to be used on all the resources as identifier, also the name of the ECS cluster
   */
  readonly name?: string;
  /**
   * A map of tags to add to ECS Cluster
   * @default [object Object]
   */
  readonly tags?: { [key: string]: string };
}
export class TerraformAwsModulesEcsAws extends TerraformModule {
  private readonly inputs: { [name: string]: any } = { };
  public constructor(scope: Construct, id: string, options: TerraformAwsModulesEcsAwsOptions = {}) {
    super(scope, id, {
      source: 'terraform-aws-modules/ecs/aws',
    });
    this.capacityProviders = options.capacityProviders;
    this.containerInsights = options.containerInsights;
    this.createEcs = options.createEcs;
    this.defaultCapacityProviderStrategy = options.defaultCapacityProviderStrategy;
    this.name = options.name;
    this.tags = options.tags;
  }
  public get capacityProviders(): string[] | undefined {
    return this.inputs.capacity_providers as string[] | undefined;
  }
  public set capacityProviders(value: string[] | undefined) {
    this.inputs.capacity_providers = value;
  }
  public get containerInsights(): boolean | undefined {
    return this.inputs.container_insights as boolean | undefined;
  }
  public set containerInsights(value: boolean | undefined) {
    this.inputs.container_insights = value;
  }
  public get createEcs(): boolean | undefined {
    return this.inputs.create_ecs as boolean | undefined;
  }
  public set createEcs(value: boolean | undefined) {
    this.inputs.create_ecs = value;
  }
  public get defaultCapacityProviderStrategy(): { [key: string]: any }[] | undefined {
    return this.inputs.default_capacity_provider_strategy as { [key: string]: any }[] | undefined;
  }
  public set defaultCapacityProviderStrategy(value: { [key: string]: any }[] | undefined) {
    this.inputs.default_capacity_provider_strategy = value;
  }
  public get name(): string | undefined {
    return this.inputs.name as string | undefined;
  }
  public set name(value: string | undefined) {
    this.inputs.name = value;
  }
  public get tags(): { [key: string]: string } | undefined {
    return this.inputs.tags as { [key: string]: string } | undefined;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this.inputs.tags = value;
  }
  public get ecsClusterArnOutput(): string {
    return this.interpolationForOutput('ecs_cluster_arn');
  }
  public get ecsClusterIdOutput(): string {
    return this.interpolationForOutput('ecs_cluster_id');
  }
  public get ecsClusterNameOutput(): string {
    return this.interpolationForOutput('ecs_cluster_name');
  }
  protected synthesizeAttributes() {
    return this.inputs;
  }
}
