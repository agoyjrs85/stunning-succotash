# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## attributes Type

`object` ([Details](records-definitions-actor-properties-attributes.md))

# undefined Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :---------------------- | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)               | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/id")               |
| [self](#self)           | `string`  | Required | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/self")           |
| [name](#name)           | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/name")           |
| [email](#email)         | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-email.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/email")         |
| [bot](#bot)             | `boolean` | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-bot.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/bot")             |
| [htmlUrl](#htmlUrl)     | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/htmlUrl")     |
| [avatarUrl](#avatarUrl) | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-avatarurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/avatarUrl") |
| [createdAt](#createdAt) | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/createdAt") |
| [updatedAt](#updatedAt) | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/updatedAt") |
| [deletedAt](#deletedAt) | `string`  | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/deletedAt") |

## id

The unique ID of this actor


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-id.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/id")

### id Type

`string`

## self

The canonical URI for this record


`self`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-self.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/self")

### self Type

`string`

### self Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## name

The name of the actor


`name`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-name.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/name")

### name Type

`string`

## email

The name of the email


`email`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-email.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/email")

### email Type

`string`

## bot

indicates the actor is not a human


`bot`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-bot.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/bot")

### bot Type

`boolean`

## htmlUrl

A web URL for this actor


`htmlUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-htmlurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/htmlUrl")

### htmlUrl Type

`string`

### htmlUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## avatarUrl

a URL for an avatar for this actor


`avatarUrl`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-avatarurl.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/avatarUrl")

### avatarUrl Type

`string`

### avatarUrl Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc4291 "check the specification")

## createdAt

The time actor repository was created


`createdAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-createdat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/createdAt")

### createdAt Type

`string`

### createdAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updatedAt

The time this actor was updated


`updatedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-updatedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/updatedAt")

### updatedAt Type

`string`

### updatedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## deletedAt

The time this actor was deleted


`deletedAt`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-actor-properties-attributes-properties-deletedat.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/actor/properties/attributes/properties/deletedAt")

### deletedAt Type

`string`

### deletedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
