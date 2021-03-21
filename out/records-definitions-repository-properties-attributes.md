# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-repository-properties-attributes.md))

# undefined Properties

| Property                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                       |
| :------------------------------ | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                       | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/id")                       |
| [self](#self)                   | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/self")                   |
| [owner](#owner)                 | `object`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-owner.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/owner")                 |
| [name](#name)                   | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/name")                   |
| [htmlUrl](#htmlUrl)             | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/htmlUrl")             |
| [defaultBranch](#defaultBranch) | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-defaultbranch.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/defaultBranch") |
| [languages](#languages)         | `array`   | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-languages.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/languages")         |
| [fork](#fork)                   | `boolean` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-fork.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/fork")                   |
| [private](#private)             | `boolean` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-private.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/private")             |
| [createdAt](#createdAt)         | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/createdAt")         |
| [updatedAt](#updatedAt)         | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/updatedAt")         |
| [deletedAt](#deletedAt)         | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/deletedAt")         |

## id

The unique ID of this repository.


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/id")

### id Type

`string`

## self

The canonical URI for this record.


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## owner

The owning entity of the repository - usually an organization or a user.


`owner`

-   is required
-   Type: `object` ([Details](records-definitions-repository-properties-attributes-properties-owner.md))
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-owner.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/owner")

### owner Type

`object` ([Details](records-definitions-repository-properties-attributes-properties-owner.md))

## name

The name of the repository


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/name")

### name Type

`string`

## htmlUrl

The URL of this repository on the web


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## defaultBranch

The default branch of this repository


`defaultBranch`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-defaultbranch.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/defaultBranch")

### defaultBranch Type

`string`

### defaultBranch Default Value

The default value is:

```json
"master"
```

## languages

Languages used in this array


`languages`

-   is optional
-   Type: `string[]`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-languages.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/languages")

### languages Type

`string[]`

## fork

A flag to mark this repository as a fork


`fork`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-fork.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/fork")

### fork Type

`boolean`

## private

A flag to mark this repository as private (if false, that indicates the repository is public)


`private`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-private.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/private")

### private Type

`boolean`

## createdAt

The time this repository was created


`createdAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/createdAt")

### createdAt Type

`string`

### createdAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updatedAt

The time this repository was updated


`updatedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/updatedAt")

### updatedAt Type

`string`

### updatedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## deletedAt

The time this repository was deleted


`deletedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-repository-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/repository/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
