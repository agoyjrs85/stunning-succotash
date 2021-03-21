# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-deliverybuild-properties-attributes.md))

# undefined Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                       |
| :------------------------ | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                 | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/id")                 |
| [self](#self)             | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/self")             |
| [number](#number)         | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-number.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/number")         |
| [workflow](#workflow)     | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-workflow.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/workflow")     |
| [repository](#repository) | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-repository.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/repository") |
| [state](#state)           | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-state.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/state")           |
| [commitOid](#commitOid)   | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/commitOid")   |
| [branch](#branch)         | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-branch.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/branch")         |
| [htmlUrl](#htmlUrl)       | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/htmlUrl")       |
| [createdAt](#createdAt)   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/createdAt")   |
| [updatedAt](#updatedAt)   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/updatedAt")   |
| [finishedAt](#finishedAt) | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-finishedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/finishedAt") |
| [deletedAt](#deletedAt)   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/deletedAt")   |

## id

The unique ID of this Build.


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/id")

### id Type

`string`

## self

The canonical URI for this record.


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## number

The number identifying this Build, if available


`number`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-number.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/number")

### number Type

`integer`

## workflow

The `self` URI of the related Workflow, if it exists.


`workflow`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-workflow.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/workflow")

### workflow Type

`string`

### workflow Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## repository

The `self` URI of the related Repository, if it exists.


`repository`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-repository.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/repository")

### repository Type

`string`

### repository Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## state

The state of the Build.


`state`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-state.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/state")

### state Type

`string`

### state Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | ----------- |
| `"created"`  |             |
| `"running"`  |             |
| `"errored"`  |             |
| `"complete"` |             |

## commitOid

The oid of the Commit this Build ran on, if present.


`commitOid`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/commitOid")

### commitOid Type

`string`

## branch

The name of the branch this Build ran on, if present.


`branch`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-branch.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/branch")

### branch Type

`string`

## htmlUrl

The URL to view this Build.


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## createdAt

The time this build was created.


`createdAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/createdAt")

### createdAt Type

`string`

### createdAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updatedAt

The time this build was last updated.


`updatedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/updatedAt")

### updatedAt Type

`string`

### updatedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## finishedAt

The time this build finished.


`finishedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-finishedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/finishedAt")

### finishedAt Type

`string`

### finishedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## deletedAt

The time build was deleted.


`deletedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
