# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-testresult-properties-attributes.md))

# undefined Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                 |
| :------------------------ | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                 | `string` | Required | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/id")                 |
| [self](#self)             | `string` | Required | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/self")             |
| [build](#build)           | `string` | Required | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-build.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/build")           |
| [job](#job)               | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-job.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/job")               |
| [state](#state)           | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-state.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/state")           |
| [file](#file)             | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-file.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/file")             |
| [message](#message)       | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-message.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/message")       |
| [name](#name)             | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/name")             |
| [createdAt](#createdAt)   | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/createdAt")   |
| [updatedAt](#updatedAt)   | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/updatedAt")   |
| [finishedAt](#finishedAt) | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-finishedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/finishedAt") |
| [deletedAt](#deletedAt)   | `string` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/deletedAt")   |

## id

The unique ID of this test result record.


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/id")

### id Type

`string`

## self

The canonical URI for this record.


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## build

The `self` URI of the related Build.


`build`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-build.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/build")

### build Type

`string`

### build Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## job

The `self` URI of the related Job.


`job`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-job.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/job")

### job Type

`string`

### job Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## state

The state of the test result


`state`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-state.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/state")

### state Type

`string`

### state Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | ----------- |
| `"passed"` |             |
| `"failed"` |             |

## file

The file in which this test is defined.


`file`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-file.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/file")

### file Type

`string`

## message

The associated message for this result.


`message`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-message.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/message")

### message Type

`string`

## name

The name of the test.


`name`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/name")

### name Type

`string`

## createdAt

The time this build was created.


`createdAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/createdAt")

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
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/updatedAt")

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
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-finishedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/finishedAt")

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
-   defined in: [Code Climate Platform Schema](records-definitions-testresult-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/testResult/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
