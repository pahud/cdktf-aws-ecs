# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Cluster <a name="@pahud/cdktf-aws-ecs.Cluster"></a>

#### Initializers <a name="@pahud/cdktf-aws-ecs.Cluster.Initializer"></a>

```typescript
import { Cluster } from '@pahud/cdktf-aws-ecs'

new Cluster(scope: Construct, id: string, props?: ClusterProps)
```

##### `scope`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.parameter.props"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.ClusterProps`](#@pahud/cdktf-aws-ecs.ClusterProps)

---

#### Methods <a name="Methods"></a>

##### `addAsgCapacity` <a name="@pahud/cdktf-aws-ecs.Cluster.addAsgCapacity"></a>

```typescript
public addAsgCapacity(id: string, options: AsgCapacityOptions)
```

###### `id`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.parameter.id"></a>

- *Type:* `string`

---

###### `options`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.parameter.options"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.AsgCapacityOptions`](#@pahud/cdktf-aws-ecs.AsgCapacityOptions)

---


#### Properties <a name="Properties"></a>

##### `clusterName`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.property.clusterName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.property.region"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.property.vpc"></a>

- *Type:* `any`

---

##### `vpcId`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.Cluster.property.vpcId"></a>

- *Type:* `string`

---


## Structs <a name="Structs"></a>

### AsgCapacityOptions <a name="@pahud/cdktf-aws-ecs.AsgCapacityOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AsgCapacityOptions } from '@pahud/cdktf-aws-ecs'

const asgCapacityOptions: AsgCapacityOptions = { ... }
```

##### `desiredCapacity`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.AsgCapacityOptions.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `machineImage`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.AsgCapacityOptions.property.machineImage"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.IEcsMachineImage`](#@pahud/cdktf-aws-ecs.IEcsMachineImage)

---

##### `maxCapacity`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.AsgCapacityOptions.property.maxCapacity"></a>

- *Type:* `number`

---

##### `minCapacity`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.AsgCapacityOptions.property.minCapacity"></a>

- *Type:* `number`

---

### BottleRocketImageProps <a name="@pahud/cdktf-aws-ecs.BottleRocketImageProps"></a>

Properties for BottleRocketImage.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { BottleRocketImageProps } from '@pahud/cdktf-aws-ecs'

const bottleRocketImageProps: BottleRocketImageProps = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.BottleRocketImageProps.property.architecture"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.InstanceArchitecture`](#@pahud/cdktf-aws-ecs.InstanceArchitecture)
- *Default:* x86_64

The CPU architecture.

---

##### `variant`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.BottleRocketImageProps.property.variant"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.BottlerocketEcsVariant`](#@pahud/cdktf-aws-ecs.BottlerocketEcsVariant)
- *Default:* BottlerocketEcsVariant.AWS_ECS_1

The Amazon ECS variant to use.

Only `aws-ecs-1` is currently available

---

### EcsOptimizedAmiProps <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmiProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EcsOptimizedAmiProps } from '@pahud/cdktf-aws-ecs'

const ecsOptimizedAmiProps: EcsOptimizedAmiProps = { ... }
```

##### `generation`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmiProps.property.generation"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.AmazonLinuxGeneration`](#@pahud/cdktf-aws-ecs.AmazonLinuxGeneration)

---

##### `hwtype`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmiProps.property.hwtype"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.AmiHardwareType`](#@pahud/cdktf-aws-ecs.AmiHardwareType)

---

## Classes <a name="Classes"></a>

### BottleRocketImage <a name="@pahud/cdktf-aws-ecs.BottleRocketImage"></a>

- *Implements:* [`@pahud/cdktf-aws-ecs.IEcsMachineImage`](#@pahud/cdktf-aws-ecs.IEcsMachineImage)

Construct an Bottlerocket image from the latest AMI published in SSM.

#### Initializers <a name="@pahud/cdktf-aws-ecs.BottleRocketImage.Initializer"></a>

```typescript
import { BottleRocketImage } from '@pahud/cdktf-aws-ecs'

new BottleRocketImage(scope: Construct, props?: BottleRocketImageProps)
```

##### `scope`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.BottleRocketImage.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `props`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.BottleRocketImage.parameter.props"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.BottleRocketImageProps`](#@pahud/cdktf-aws-ecs.BottleRocketImageProps)

---



#### Properties <a name="Properties"></a>

##### `amiId`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.BottleRocketImage.property.amiId"></a>

- *Type:* `string`

Return the correct image.

---


### ClusterProps <a name="@pahud/cdktf-aws-ecs.ClusterProps"></a>

#### Initializers <a name="@pahud/cdktf-aws-ecs.ClusterProps.Initializer"></a>

```typescript
import { ClusterProps } from '@pahud/cdktf-aws-ecs'

new ClusterProps()
```



#### Properties <a name="Properties"></a>

##### `instanceType`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.ClusterProps.property.instanceType"></a>

- *Type:* `string`
- *Default:* t3.large

instance type for the default capacity.

---

##### `name`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.ClusterProps.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.ClusterProps.property.region"></a>

- *Type:* `string`

The AWS region to deploy.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.ClusterProps.property.vpcSubnets"></a>

- *Type:* `string`[]
- *Default:* private subnets of a new VPC.

VPC subnet IDs for the container instances.

---


### EcsOptimizedAmi <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi"></a>

- *Implements:* [`@pahud/cdktf-aws-ecs.IEcsMachineImage`](#@pahud/cdktf-aws-ecs.IEcsMachineImage)

#### Initializers <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.Initializer"></a>

```typescript
import { EcsOptimizedAmi } from '@pahud/cdktf-aws-ecs'

new EcsOptimizedAmi(scope: Construct, props?: EcsOptimizedAmiProps)
```

##### `scope`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `props`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.parameter.props"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.EcsOptimizedAmiProps`](#@pahud/cdktf-aws-ecs.EcsOptimizedAmiProps)

---



#### Properties <a name="Properties"></a>

##### `amiId`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.property.amiId"></a>

- *Type:* `string`

Return the correct image.

---

##### `amiParameterName`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.property.amiParameterName"></a>

- *Type:* `string`

---

##### `generation`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.property.generation"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.AmazonLinuxGeneration`](#@pahud/cdktf-aws-ecs.AmazonLinuxGeneration)

---

##### `hwType`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.property.hwType"></a>

- *Type:* [`@pahud/cdktf-aws-ecs.AmiHardwareType`](#@pahud/cdktf-aws-ecs.AmiHardwareType)

---

##### `scope`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.EcsOptimizedAmi.property.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---


### StringParameter <a name="@pahud/cdktf-aws-ecs.StringParameter"></a>

#### Initializers <a name="@pahud/cdktf-aws-ecs.StringParameter.Initializer"></a>

```typescript
import { StringParameter } from '@pahud/cdktf-aws-ecs'

new StringParameter()
```


#### Static Functions <a name="Static Functions"></a>

##### `valueFromLookup` <a name="@pahud/cdktf-aws-ecs.StringParameter.valueFromLookup"></a>

```typescript
import { StringParameter } from '@pahud/cdktf-aws-ecs'

StringParameter.valueFromLookup(scope: Construct, id: string, parameterName: string)
```

###### `scope`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.StringParameter.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `id`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.StringParameter.parameter.id"></a>

- *Type:* `string`

---

###### `parameterName`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.StringParameter.parameter.parameterName"></a>

- *Type:* `string`

---



## Protocols <a name="Protocols"></a>

### IEcsMachineImage <a name="@pahud/cdktf-aws-ecs.IEcsMachineImage"></a>

- *Implemented By:* [`@pahud/cdktf-aws-ecs.BottleRocketImage`](#@pahud/cdktf-aws-ecs.BottleRocketImage), [`@pahud/cdktf-aws-ecs.EcsOptimizedAmi`](#@pahud/cdktf-aws-ecs.EcsOptimizedAmi), [`@pahud/cdktf-aws-ecs.IEcsMachineImage`](#@pahud/cdktf-aws-ecs.IEcsMachineImage)


#### Properties <a name="Properties"></a>

##### `amiId`<sup>Required</sup> <a name="@pahud/cdktf-aws-ecs.IEcsMachineImage.property.amiId"></a>

- *Type:* `string`

---

## Enums <a name="Enums"></a>

### AmazonLinuxGeneration <a name="AmazonLinuxGeneration"></a>

#### `AMAZON_LINUX` <a name="@pahud/cdktf-aws-ecs.AmazonLinuxGeneration.AMAZON_LINUX"></a>

---


#### `AMAZON_LINUX_2` <a name="@pahud/cdktf-aws-ecs.AmazonLinuxGeneration.AMAZON_LINUX_2"></a>

---


### AmiHardwareType <a name="AmiHardwareType"></a>

#### `STANDARD` <a name="@pahud/cdktf-aws-ecs.AmiHardwareType.STANDARD"></a>

Use the standard Amazon ECS-optimized AMI.

---


#### `GPU` <a name="@pahud/cdktf-aws-ecs.AmiHardwareType.GPU"></a>

Use the Amazon ECS GPU-optimized AMI.

---


#### `ARM` <a name="@pahud/cdktf-aws-ecs.AmiHardwareType.ARM"></a>

Use the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI.

---


### BottlerocketEcsVariant <a name="BottlerocketEcsVariant"></a>

Amazon ECS variant.

#### `AWS_ECS_1` <a name="@pahud/cdktf-aws-ecs.BottlerocketEcsVariant.AWS_ECS_1"></a>

aws-ecs-1 variant.

---


### InstanceArchitecture <a name="InstanceArchitecture"></a>

Identifies an instance's CPU architecture.

#### `ARM_64` <a name="@pahud/cdktf-aws-ecs.InstanceArchitecture.ARM_64"></a>

ARM64 architecture.

---


#### `X86_64` <a name="@pahud/cdktf-aws-ecs.InstanceArchitecture.X86_64"></a>

x86-64 architecture.

---

