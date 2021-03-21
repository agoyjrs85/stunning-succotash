import * as Ajv from "ajv";
import { resolve } from "path";
import { readFileSync } from "fs";

const schemaPath = resolve(__dirname, "../schemas/records.json")

export class RecordValidator {
  private _ajv: Ajv.Ajv | null = null
  private _isValid: boolean | null = null

  constructor(public record: object) {
  }

  get isValid(): boolean {
    this.validate()

    return this._isValid as boolean
  }

  get errors(): string[] {
    this.validate()

    if (!this.isValidType) {
      if(!this.record["type"]) {
        return ["missing required attribute \"type\""]
      } else {
        return [`"${this.record["type"]}" is not a recognized record type`]
      }
    }

    let sourceErrs = this.ajv.errors || []

    if (!sourceErrs.every((e) => e.dataPath === "")) {
      sourceErrs = sourceErrs.filter((e) => e.dataPath !== "")
    }

    return sourceErrs.map((e) => {
      let p = e.params

      if (p["missingProperty"]) {
        return `${e.dataPath} missing required attribute "${p["missingProperty"]}"`
      } else if (p["allowedValue"]) {
        return `${e.dataPath} must be "${p["allowedValue"]}"`
      } else if (p["allowedValues"]) {
        return `${e.dataPath} must be one of ${p["allowedValues"].map((o) => `"${o}"`).join(", ")}`
      } else if (p["format"]) {
        return `${e.dataPath} must match format "${p["format"]}"`
      } else {
        return `${e.dataPath} ${e.message}`
      }
    })
  }

  private get ajv(): Ajv.Ajv {
    if (!this._ajv) {
      this._ajv = new Ajv({ allErrors: true })
      this._ajv.addSchema(
        JSON.parse(readFileSync(schemaPath).toString()),
        "records",
      )
    }

    return this._ajv
  }

  // record types are FooBar, keys in the json schema defs are fooBar
  private get recordTypeLowerCamel(): string {
    const t = this.record["type"] || "MissingType"
    return `${t[0].toLowerCase()}${t.slice(1)}`
  }

  private get recordSchemaRef(): string {
    return `records#/$definitions/${this.recordTypeLowerCamel}`
  }

  private get isValidType(): boolean {
    if (!this.record["type"]) {
      return false
    }

    return undefined !== this.ajv.getSchema(this.recordSchemaRef)
  }

  private validate() {
    if (this._isValid === null) {
      // short-circuit if no type/schema found
      if (!this.isValidType) {
        this._isValid = false
        return
      }

      this._isValid = this.ajv.validate(
        this.recordSchemaRef,
        this.record,
      ) as boolean
    }
  }
}
