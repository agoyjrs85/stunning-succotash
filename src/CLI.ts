import * as YargsParser from "yargs-parser"

import { Logger, LoggerLevel } from "./Logger"

import DiscoverStreams from "./CLI/Commands/DiscoverStreams"
import SyncStream from "./CLI/Commands/SyncStream"
import VerifyConfiguration from "./CLI/Commands/VerifyConfiguration"
import Help from "./CLI/Commands/Help"

const AVAILABLE_COMMANDS = [DiscoverStreams, SyncStream, VerifyConfiguration, Help]

export default class CLI {
  logger: Logger

  constructor(public argv: string[]) {
    let logLevel = LoggerLevel.INFO
    if (YargsParser(this.args.slice(1), CLI.globalYargsYargsOpts())["verbose"]) {
      logLevel = LoggerLevel.DEBUG
    }
    this.logger = new Logger(process.stdout, { level: logLevel })
  }

  get args() {
    return this.argv.slice(2)
  }

  get commandName() {
    return this.args[0]
  }

  run() {
    const cmdKlass = AVAILABLE_COMMANDS.find(
      (c) => c.commandName() === this.commandName
    ) || Help
    const parsedArgs = YargsParser(
      this.args.slice(1),
      this.mergedYargsParserOpts(cmdKlass.yargsParserOpts()),
    )

    if (parsedArgs.help) {
      cmdKlass.help()
    } else {
      (new cmdKlass(parsedArgs, this.logger)).run()
    }
  }

  private static globalYargsYargsOpts() {
    return {
      alias: { verbose: "v" },
      boolean: ["verbose"],
    }
  }

  private mergedYargsParserOpts(opts: object) {
    return {
      ...opts,
      alias: { ...CLI.globalYargsYargsOpts()["alias"], ...opts["alias"] },
      boolean: CLI.globalYargsYargsOpts()["boolean"].concat(opts["boolean"] || []),
    }
  }
}
