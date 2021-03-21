# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/fileCoverage
```

Information about test coverage of a file within a commit.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## fileCoverage Type

`object` ([Details](records-definitions-filecoverage.md))

# undefined Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :------------------------ | ------------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/type")             |
| [attributes](#attributes) | `object`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes") |
| [required](#required)     | Not specified | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/required")     |

## type




`type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"FileCoverage"
```

## attributes




`attributes`

-   is optional
-   Type: `object` ([Details](records-definitions-filecoverage-properties-attributes.md))
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes")

### attributes Type

`object` ([Details](records-definitions-filecoverage-properties-attributes.md))

## required




`required`

-   is optional
-   Type: unknown
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/required")

### required Type

unknown
