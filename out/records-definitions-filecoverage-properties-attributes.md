# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-filecoverage-properties-attributes.md))

# undefined Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                     |
| :------------------------ | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [self](#self)             | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/self")             |
| [repository](#repository) | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-repository.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/repository") |
| [commitOid](#commitOid)   | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/commitOid")   |
| [file](#file)             | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-file.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/file")             |
| [lineHits](#lineHits)     | `array`   | Required | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-linehits.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/lineHits")     |
| [filesCount](#filesCount) | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-filescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/filesCount") |
| [htmlUrl](#htmlUrl)       | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/htmlUrl")       |
| [createdAt](#createdAt)   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/createdAt")   |
| [updatedAt](#updatedAt)   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/updatedAt")   |
| [deletedAt](#deletedAt)   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/deletedAt")   |

## self

The canonical URI for this record.


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## repository

The `self` URI of the Repository this test coverage applies to.


`repository`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-repository.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/repository")

### repository Type

`string`

### repository Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## commitOid

The commit oid this test coverage is for.


`commitOid`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/commitOid")

### commitOid Type

`string`

## file

The path of the file for these test results.


`file`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-file.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/file")

### file Type

`string`

## lineHits

The number of hits on each line in the file, starting with line 1. An entry for every line should be present.


`lineHits`

-   is required
-   Type: unknown\[]
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-linehits.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/lineHits")

### lineHits Type

unknown\[]

## filesCount

The number of files.


`filesCount`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-filescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/filesCount")

### filesCount Type

`integer`

### filesCount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## htmlUrl

The URL to view this coverage.


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## createdAt

The time this coverage was created.


`createdAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/createdAt")

### createdAt Type

`string`

### createdAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updatedAt

The time this coverage was last updated.


`updatedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/updatedAt")

### updatedAt Type

`string`

### updatedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## deletedAt

The time coverage was deleted.


`deletedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-filecoverage-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/fileCoverage/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
