# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-coveragetotals-properties-attributes.md))

# undefined Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                     |
| :------------------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [self](#self)                         | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/self")                         |
| [repository](#repository)             | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-repository.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/repository")             |
| [commitOid](#commitOid)               | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/commitOid")               |
| [coverage](#coverage)                 | `number`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-coverage.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/coverage")                 |
| [filesCount](#filesCount)             | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-filescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/filesCount")             |
| [linesCount](#linesCount)             | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-linescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/linesCount")             |
| [linesHitCount](#linesHitCount)       | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-lineshitcount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/linesHitCount")       |
| [linesMissedCount](#linesMissedCount) | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-linesmissedcount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/linesMissedCount") |
| [branchesCount](#branchesCount)       | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-branchescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/branchesCount")       |
| [methodsCount](#methodsCount)         | `integer` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-methodscount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/methodsCount")         |
| [htmlUrl](#htmlUrl)                   | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/htmlUrl")                   |
| [createdAt](#createdAt)               | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/createdAt")               |
| [updatedAt](#updatedAt)               | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/updatedAt")               |
| [deletedAt](#deletedAt)               | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/deletedAt")               |

## self

The canonical URI for this record.


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/self")

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
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-repository.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/repository")

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
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/commitOid")

### commitOid Type

`string`

## coverage

The coverage of this test coverage result, as a percentage


`coverage`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-coverage.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/coverage")

### coverage Type

`number`

### coverage Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

## filesCount

The number of files.


`filesCount`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-filescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/filesCount")

### filesCount Type

`integer`

### filesCount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## linesCount

The total number of lines under test.


`linesCount`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-linescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/linesCount")

### linesCount Type

`integer`

### linesCount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## linesHitCount

The number of lines hit by the tests.


`linesHitCount`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-lineshitcount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/linesHitCount")

### linesHitCount Type

`integer`

### linesHitCount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## linesMissedCount

The number of lines missed by the tests.


`linesMissedCount`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-linesmissedcount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/linesMissedCount")

### linesMissedCount Type

`integer`

### linesMissedCount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## branchesCount

The number of branches.


`branchesCount`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-branchescount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/branchesCount")

### branchesCount Type

`integer`

### branchesCount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## methodsCount

The number of methods tested.


`methodsCount`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-methodscount.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/methodsCount")

### methodsCount Type

`integer`

### methodsCount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## htmlUrl

The URL to view this coverage.


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/htmlUrl")

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
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/createdAt")

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
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/updatedAt")

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
-   defined in: [Code Climate Platform Schema](records-definitions-coveragetotals-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/coverageTotals/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
