# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-stream-properties-attributes.md))

# undefined Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                  |
| :-------------------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                   | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/id")                   |
| [self](#self)               | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/self")               |
| [name](#name)               | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/name")               |
| [htmlUrl](#htmlUrl)         | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/htmlUrl")         |
| [description](#description) | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-description.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/description") |
| [record](#record)           | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-record.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/record")           |
| [recordType](#recordType)   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-recordtype.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/recordType")   |
| [subscribed](#subscribed)   | `boolean` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-subscribed.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/subscribed")   |

## id

An ID for this stream. Should be unique within the context of this connector for a given configuration.


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/id")

### id Type

`string`

## self

The canonical URL for this stream


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## name

A name for this stream


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/name")

### name Type

`string`

## htmlUrl

The URL for a human to view this stream


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## description

A description of this stream


`description`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-description.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/description")

### description Type

`string`

## record

A stream may be a representation of another record - use the URI of that record here if desired.


`record`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-record.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/record")

### record Type

`string`

### record Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## recordType

The `type` of the record referred to by the `record` URI, if present


`recordType`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-recordtype.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/recordType")

### recordType Type

`string`

## subscribed

Represents if the stream has been subscribed to by a user within Code Climate


`subscribed`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes-properties-subscribed.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes/properties/subscribed")

### subscribed Type

`boolean`
