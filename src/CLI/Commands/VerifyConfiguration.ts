import { readFileSync } from "fs";

import { AbstractCommand } from "../Command"
import { ClientConfiguration, ClientInterface } from "../../Client"
import { ConnectorLoader } from "../ConnectorLoader"

export default class VerifyConfiguration extends AbstractCommand {
  static help() {
    process.stdout.write(
      [
        "Code Climate Connector CLI",
        "",
        "Usage: codeclimate-connector verify-configuration <connector> <config-path>",
        "",
        "Verifies a connector's configuration.",
        "",
        "Arguments:",
        "\tconnector\tThe slug of the connector to run. E.g. if the connector is for PagerDuty and comes from the package codeclimate-connector-pagerduty, the slug is \"pagerduty\".",
        "\tconfig-path\tA path to a JSON file to parse and use as configuration for the connector.",
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

  run() {
    console.log("Verifying configuration...")
    this.buildClient().verifyConfiguration().
      then((result) => console.log(`Result: ${JSON.stringify(result, null, "  ")}`)).
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
