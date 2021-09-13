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

##### `maxCapacity`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.AsgCapacityOptions.property.maxCapacity"></a>

- *Type:* `number`

---

##### `minCapacity`<sup>Optional</sup> <a name="@pahud/cdktf-aws-ecs.AsgCapacityOptions.property.minCapacity"></a>

- *Type:* `number`

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

