import { Logger } from "../Logger"

export abstract class AbstractCommand {
  constructor(public yargs: object, public logger: Logger) {
  }

  // Command implementations can provide a config object for pasing to
  // yargs-parser
  // https://www.npmjs.com/package/yargs-parser
  static yargsParserOpts(): object {
    return {}
  }

  // command name to match against
  static commandName(): string {
    // snake-case class name
    return this.name.replace(/([a-z]?)([A-Z])/g, function(_match, g1, g2) {
      if (g1 && g1.length > 0) {
        return `${g1}-${g2.toLowerCase()}`
      } else {
        return g2.toLowerCase()
      }
    })
  }

  // Print help contents
  static help(): void {
    // nop - subclasses should implement
  }

  // Run the command
  abstract run(): void
}
