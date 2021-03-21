# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-incident-properties-attributes.md))

# undefined Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                           |
| :---------------------- | ------------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)               | `string`      | Required | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/id")               |
| [self](#self)           | `string`      | Required | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/self")           |
| [title](#title)         | `string`      | Required | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-title.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/title")         |
| [htmlUrl](#htmlUrl)     | `string`      | Required | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/htmlUrl")     |
| [number](#number)       | `integer`     | Required | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-number.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/number")       |
| [status](#status)       | Not specified | Required | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-status.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/status")       |
| [createdAt](#createdAt) | `string`      | Required | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/createdAt") |
| [updatedAt](#updatedAt) | `string`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/updatedAt") |
| [deletedAt](#deletedAt) | `string`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/deletedAt") |

## id

The unique ID of this incident from the incident response platform


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/id")

### id Type

`string`

## self

The canonical URI for this record


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## title

The human-readable title of this incident


`title`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-title.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/title")

### title Type

`string`

## htmlUrl

The URL for a human to view this incident


`htmlUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## number

The number identifying this incident


`number`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-number.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/number")

### number Type

`integer`

## status

The status of this incident


`status`

-   is required
-   Type: unknown
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-status.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/status")

### status Type

unknown

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | ----------- |
| `"triggered"`    |             |
| `"acknowledged"` |             |
| `"resolved"`     |             |

## createdAt

The time this incident began.


`createdAt`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/createdAt")

### createdAt Type

`string`

### createdAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updatedAt

The time this incident was last updated.


`updatedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/updatedAt")

### updatedAt Type

`string`

### updatedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## deletedAt

The time this incident was deleted.


`deletedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
