# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records/stream#/$definitions/record/oneOf/0
```

Streams are data sources that can be subscribed to.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## 0 Type

`object` ([Details](records-definitions-stream.md))

# undefined Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :------------------------ | ------------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/type")             |
| [attributes](#attributes) | `object`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes") |
| [required](#required)     | Not specified | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-stream-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/required")     |

## type




`type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"Stream"
```

## attributes




`attributes`

-   is optional
-   Type: `object` ([Details](records-definitions-stream-properties-attributes.md))
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/attributes")

### attributes Type

`object` ([Details](records-definitions-stream-properties-attributes.md))

## required




`required`

-   is optional
-   Type: unknown
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-stream-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records/stream#/$definitions/stream/properties/required")

### required Type

unknown
