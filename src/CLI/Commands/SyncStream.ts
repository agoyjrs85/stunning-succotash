import { readFileSync } from "fs";

import { AbstractCommand } from "../Command"
import { ClientConfiguration, ClientInterface } from "../../Client"
import { ConnectorLoader } from "../ConnectorLoader"
import { Stream } from "../../Stream"

export default class SyncStream extends AbstractCommand {
  static help() {
    process.stdout.write(
      [
        "Code Climate Connector CLI",
        "",
        "Usage: codeclimate-connector sync-stream <connector> <config-path> <stream> <earliest-data-cutoff>",
        "",
        "Runs a sync process in a connector for a given stream.",
        "",
        "Arguments:",
        "\tconnector\tThe slug of the connector to run. E.g. if the connector is for PagerDuty and comes from the package codeclimate-connector-pagerduty, the slug is \"pagerduty\".",
        "\tconfig-path\tA path to a JSON file to parse and use as configuration for the connector.",
        "\tstream\parseable JSON string representing the stream to sync. Some connector may ignore this value, and in that case you can pass \"null\".",
        "\tearliest-data-cutoff\tHow far back in time the sync process should go. Should be iso8601 format.",
      ].join("\n") + "\n"
    )
  }

  get connectorSlug(): string {
    return this.yargs["_"][0] || ""
  }

  get configPath(): string {
    return this.yargs["_"][1] || ""
  }

  get clientConfiguration(): ClientConfiguration {
    const json = JSON.parse(readFileSync(this.configPath).toString())
    return new Map(
      Object.keys(json).map((key) => [key, json[key]])
    )
  }

  get stream(): Stream {
    return new Stream(JSON.parse(this.yargs["_"][2]))
  }

  get earliestDataStr(): string {
    return this.yargs["_"][3] || ""
  }

  get earliestDataCutoff(): Date {
    const d = new Date(this.earliestDataStr)

    if (isNaN(d.valueOf())) {
      throw `"${this.earliestDataStr}" cannot be parsed as a timestamp`
    }

    return d
  }

  run() {
    this.buildClient().syncStream(this.stream, this.earliestDataCutoff).
      then(() => this.logger.info(`Done syncing stream ${JSON.stringify(this.stream)}.`)).
      catch((err) => { throw err })
  }

  private buildClient(): ClientInterface {
    return new ConnectorLoader(
      this.connectorSlug,
      this.clientConfiguration,
      this.logger,
    ).buildClient()
  }
}
