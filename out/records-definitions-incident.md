# Untitled object in Code Climate Platform Schema Schema

```txt
https://platform.codeclimate.com/schemas/records#/$definitions/incident
```

Incidents are a normalized, de-duplicated event. It can be thought of as a problem or an issue within your service that needs to be addressed and resolved.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [records.json\*](records.json "open original schema") |

## incident Type

`object` ([Details](records-definitions-incident.md))

# undefined Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :------------------------ | ------------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/type")             |
| [attributes](#attributes) | `object`      | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes") |
| [required](#required)     | Not specified | Optional | cannot be null | [Code Climate Platform Schema](records-definitions-incident-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/required")     |

## type




`type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-type.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"Incident"
```

## attributes




`attributes`

-   is optional
-   Type: `object` ([Details](records-definitions-incident-properties-attributes.md))
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-attributes.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/attributes")

### attributes Type

`object` ([Details](records-definitions-incident-properties-attributes.md))

## required




`required`

-   is optional
-   Type: unknown
-   cannot be null
-   defined in: [Code Climate Platform Schema](records-definitions-incident-properties-required.md "https&#x3A;//platform.codeclimate.com/schemas/records#/$definitions/incident/properties/required")

### required Type

unknown
