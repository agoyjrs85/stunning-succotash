import { RecordValidator } from "../RecordValidator"

describe(RecordValidator, () => {
  describe("Incident records", () => {
    test("is not valid with missing attrs", () => {
      const record = {
        type: "Incident",
        attributes: {
          id: "a1b2c3",
          self: "http://example.com",
          title: "an incident"
        }
      }
      const validator = new RecordValidator(record)

      expect(validator.isValid).toBe(false)
      expect(validator.errors.length).toBeGreaterThan(2)
      expect(validator.errors[0]).toMatch(/required attribute "htmlUrl"/)
    })

    test("is not valid with incorrectly formatted attrs", () => {
      const record = {
        type: "Incident",
        attributes: {
          id: "a1b2c3",
          self: "http://example.com/incident/42",
          title: "an incident",
          htmlUrl: "not-a-url",
          number: 42,
          status: "not-a-status",
          createdAt: "not-a-time"
        }
      }
      const validator = new RecordValidator(record)

      expect(validator.isValid).toBe(false)
      expect(validator.errors.length).toBe(3)
      expect(validator.errors[0]).toMatch(/htmlUrl.*must match format/)
      expect(validator.errors[1]).toMatch(/status.*must be one of.*triggered/)
      expect(validator.errors[2]).toMatch(/createdAt.*must match format/)
    })

    test("is valid", () => {
      const record = {
        type: "Incident",
        attributes: {
          id: "a1b2c3",
          self: "http://example.com/incident/42",
          title: "an incident",
          htmlUrl: "http://example.com",
          number: 42,
          status: "acknowledged",
          createdAt: "2020-02-21 12:00:00Z"
        }
      }
      const validator = new RecordValidator(record)

      expect(validator.isValid).toBe(true)
    })
  })

  describe("Stream records", () => {
    it("is not valid without required keys", () => {
      const record = {
        type: "Stream",
        attributes: {
          name: "your stream",
        }
      }
      const validator = new RecordValidator(record)

      expect(validator.isValid).toBe(false)
    })

    it("is valid without optional keys", () => {
      const record = {
        type: "Stream",
        attributes: {
          id: "a1b2c3",
          self: "yourschema://some-id",
          name: "your stream",
        }
      }
      const validator = new RecordValidator(record)

      expect(validator.isValid).toBe(true)
    })
  })

  describe("unknown record type", () => {
    test("is not valid", () => {
      const record = {
        type: "Foo",
        attributes: { }
      }
      const validator = new RecordValidator(record)

      expect(validator.isValid).toBe(false)
      expect(validator.errors[0]).toMatch(/"Foo" is not a recognized record type/)
    })
  })

  describe("object without type", () => {
    test("is not valid", () => {
      const record = { }
      const validator = new RecordValidator(record)

      expect(validator.isValid).toBe(false)
      expect(validator.errors[0]).toMatch(/missing required attribute "type"/)
    })
  })
})
