import { Logger, LoggerLevel } from "../Logger"
import { FakeLoggerIO } from "../TestHelpers"

describe(Logger, () => {
  describe("writing messages with logger levels", () => {
    test("it writes a message with default INFO level", () => {
      const io = new FakeLoggerIO()
      const logger = new Logger(io)

      logger.info("hi")
      expect(io.messages.length).toBe(1)
      expect(io.messages[0]).toBe("hi\n")
    })

    test("it doesn't write a message lower level", () => {
      const io = new FakeLoggerIO()
      const logger = new Logger(io, { level: LoggerLevel.WARN })

      logger.info("hi")
      expect(io.messages.length).toBe(0)
    })
  })

  describe("tags", () => {
    test("includes tags in messages", () => {
      const io = new FakeLoggerIO()
      const logger = new Logger(io, { tags: ["foo"] })

      logger.info("hi")
      expect(io.messages.length).toBe(1)
      expect(io.messages[0]).toBe("[foo] hi\n")
    })

    test("taggedChild builds a new logger with more tags", () => {
      const io = new FakeLoggerIO()
      const logger = new Logger(io, { tags: ["foo"] })
      const logger2 = logger.taggedChild(["bar"])

      logger2.info("hi")
      expect(io.messages.length).toBe(1)
      expect(io.messages[0]).toBe("[foo] [bar] hi\n")
    })
  })
})
