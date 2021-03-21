import { AbstractCommand } from "../Command"

export default class Help extends AbstractCommand {
  run() {
    Help.help()
  }

  static help() {
    process.stdout.write(
      [
        "Code Climate Connector CLI",
        "",
        "Usage: codeclimate-connector COMMAND ...",
        "",
        "Available commands:",
        "\thelp\tShow this message",
        "\tverify-configuration <connector> <config-path>\tVerify a connector's configuration",
        "\tdiscover-streams <connector> <config-path>\tDiscover streams available for a connector",
        "\tsync-stream <connector> <config-path> <stream-id> <earliest-data-cutoff>\tRun a sync-stream process for a connector",
        "",
        "Run `codeclimate-connector COMMAND --help` for command-specific help.",
        "",
        "Globally recognized flags:",
        "\t-v, --verbose\tMore verbose logging",
      ].join("\n") + "\n"
    )
  }
}

