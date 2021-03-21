# Deployment Schema

```txt
https://platform.codeclimate.com/schemas/deployment
```

Deployments push changes to a runtime Evironment.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Deployment.schema.json](../../schemas/Deployment.schema.json "open original schema") |

## Deployment Type

`object` ([Deployment](deployment.md))

# Deployment Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :------------------------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [\_type](#_type)                            | `string` | Required | cannot be null | [Deployment](deployment-properties-_type.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/\_type")                            |
| [id](#id)                                   | `string` | Required | cannot be null | [Deployment](deployment-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/id")                                   |
| [self](#self)                               | `string` | Required | cannot be null | [Deployment](deployment-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/self")                               |
| [environment](#environment)                 | Merged   | Optional | cannot be null | [Deployment](deployment-properties-environment.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/environment")                 |
| [originalEnvironment](#originalEnvironment) | Merged   | Optional | cannot be null | [Deployment](deployment-properties-originalenvironment.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/originalEnvironment") |
| [commitOid](#commitOid)                     | `string` | Optional | cannot be null | [Deployment](deployment-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/commitOid")                     |
| [branch](#branch)                           | `string` | Optional | cannot be null | [Deployment](deployment-properties-branch.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/branch")                           |
| [version](#version)                         | `string` | Optional | cannot be null | [Deployment](deployment-properties-version.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/version")                         |
| [packages](#packages)                       | `array`  | Optional | cannot be null | [Deployment](deployment-properties-packages.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/packages")                       |
| [creator](#creator)                         | Merged   | Optional | cannot be null | [Deployment](deployment-properties-creator.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/creator")                         |
| [htmlUrl](#htmlUrl)                         | `string` | Optional | cannot be null | [Deployment](deployment-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/htmlUrl")                         |
| [statusUrl](#statusUrl)                     | `string` | Optional | cannot be null | [Deployment](deployment-properties-statusurl.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/statusUrl")                     |
| [createdAt](#createdAt)                     | `string` | Optional | cannot be null | [Deployment](deployment-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/createdAt")                     |

## \_type




`_type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-_type.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/\_type")

### \_type Type

`string`

### \_type Constraints

**constant**: the value of this property must be equal to:

```json
"Deployment"
```

## id

The unique ID of this Deployment.


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/id")

### id Type

`string`

## self

The canonical URI for this record.


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## environment

The `self` URI of the related Environment, or a nested Environment record, if it exists.


`environment`

-   is optional
-   Type: merged type ([Details](deployment-properties-environment.md))
-   cannot be null
-   defined in: [Deployment](deployment-properties-environment.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/environment")

### environment Type

merged type ([Details](deployment-properties-environment.md))

one (and only one) of

-   [Environment](deployment-properties-environment-oneof-environment.md "check type definition")
-   [Untitled string in Deployment](deployment-properties-environment-oneof-1.md "check type definition")

## originalEnvironment

The `self` URI of the related staging Environment if promoting to production, or a nested Environment record, if it exists.


`originalEnvironment`

-   is optional
-   Type: merged type ([Details](deployment-properties-originalenvironment.md))
-   cannot be null
-   defined in: [Deployment](deployment-properties-originalenvironment.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/originalEnvironment")

### originalEnvironment Type

merged type ([Details](deployment-properties-originalenvironment.md))

one (and only one) of

-   [Environment](deployment-properties-environment-oneof-environment.md "check type definition")
-   [Untitled string in Deployment](deployment-properties-originalenvironment-oneof-1.md "check type definition")

## commitOid

The oid of the Commit this Deployment ran on, if present.


`commitOid`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-commitoid.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/commitOid")

### commitOid Type

`string`

## branch

The name of the branch this Deployment is associated with, if present.


`branch`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-branch.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/branch")

### branch Type

`string`

## version

The Deployment version


`version`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-version.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/version")

### version Type

`string`

## packages

TODO: Packages


`packages`

-   is optional
-   Type: `string[]`
-   cannot be null
-   defined in: [Deployment](deployment-properties-packages.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/packages")

### packages Type

`string[]`

## creator

The `self` URI of the Actor who created the Deployment, or a nested Actor record.


`creator`

-   is optional
-   Type: merged type ([Details](deployment-properties-creator.md))
-   cannot be null
-   defined in: [Deployment](deployment-properties-creator.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/creator")

### creator Type

merged type ([Details](deployment-properties-creator.md))

one (and only one) of

-   [Actor](codeissue-properties-statusupdatedby-oneof-actor.md "check type definition")
-   [Untitled string in Deployment](deployment-properties-creator-oneof-1.md "check type definition")

## htmlUrl

The URL to view this Deployment.


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## statusUrl

The URL to view the status of this Deployment.


`statusUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-statusurl.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/statusUrl")

### statusUrl Type

`string`

### statusUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## createdAt

The time this Deployment was created.


`createdAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Deployment](deployment-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/deployment#/properties/createdAt")

### createdAt Type

`string`

### createdAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
