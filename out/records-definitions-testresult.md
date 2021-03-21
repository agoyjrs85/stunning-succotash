# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/testResult
```

The result of a test from a Build


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## testResult Type

`object` ([Details](records-definitions-testresult.md))

# undefined Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :------------------------ | ------------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/type")             |
| [attributes](#attributes) | `object`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes") |
| [required](#required)     | Not specified | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/required")     |

## type




`type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"TestResult"
```

## attributes




`attributes`

-   is optional
-   Type: `object` ([Details](records-definitions-testresult-properties-attributes.md))
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes")

### attributes Type

`object` ([Details](records-definitions-testresult-properties-attributes.md))

## required




`required`

-   is optional
-   Type: unknown
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/required")

### required Type

unknown
