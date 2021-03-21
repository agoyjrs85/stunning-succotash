# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild
```

A Build run within a CI system.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## deliveryBuild Type

`object` ([Details](records-definitions-deliverybuild.md))

# undefined Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :------------------------ | ------------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/type")             |
| [attributes](#attributes) | `object`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes") |
| [required](#required)     | Not specified | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-deliverybuild-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/required")     |

## type




`type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"DeliveryBuild"
```

## attributes




`attributes`

-   is optional
-   Type: `object` ([Details](records-definitions-deliverybuild-properties-attributes.md))
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/attributes")

### attributes Type

`object` ([Details](records-definitions-deliverybuild-properties-attributes.md))

## required




`required`

-   is optional
-   Type: unknown
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-deliverybuild-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/deliveryBuild/properties/required")

### required Type

unknown
