# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-deliveryworkflow-properties-attributes.md))

# undefined Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                           |
| :---------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)               | `string` | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/id")               |
| [self](#self)           | `string` | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/self")           |
| [name](#name)           | `string` | Required | cannot be null | [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/name")           |
| [htmlUrl](#htmlUrl)     | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/htmlUrl")     |
| [createdAt](#createdAt) | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/createdAt") |
| [updatedAt](#updatedAt) | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/updatedAt") |
| [deletedAt](#deletedAt) | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/deletedAt") |

## id

The unique ID of this Workflow.


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/id")

### id Type

`string`

## self

The canonical URI for this record.


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## name

The name of this Workflow.


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/name")

### name Type

`string`

## htmlUrl

The URL to view this Workflow.


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## createdAt

The time this Workflow was created.


`createdAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/createdAt")

### createdAt Type

`string`

### createdAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updatedAt

The time this Workflow was last updated.


`updatedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/updatedAt")

### updatedAt Type

`string`

### updatedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## deletedAt

The time Workflow was deleted.


`deletedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliveryworkflow-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryWorkflow/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
