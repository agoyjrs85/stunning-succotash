import { Logger } from "./Logger"
import { RecordProducer } from "./RecordProducer"
import { Stream } from "./Stream"
import { StateManager } from "./StateManager"

export type ClientConfiguration = Map<string, any>

export interface VerifyConfigurationResult {
  isValid: boolean
  errorMessages?: string[]
}

export interface ClientInterface {
  /* When called, the client should verify that its configuration is valid &
   * usable, including, if necessary, testing any API credentials.
   */
  verifyConfiguration: () => Promise<VerifyConfigurationResult>

  /* When called, the client should do any necessary work to identify what
   * "Streams" it can access with the given configuration, and publish them as
   * records via its `recordProducer`. "Streams" are top-level entities used
   * to initiate syncs.
   *
   * E.g. for a VCS like GitHub, the "Streams" are repositories. For Bugsnag,
   * projects are "Streams". For a tool like PagerDuty where an API token has
   * access to a single account, there is only implicitly a single Stream.
   */
  discoverStreams: () => Promise<void>

  /* When called, the client should sync all relevant data from a Stream
   * that occurred after the `earliestDataCutoff` date, and emit relevant
   * records on the `recordProducer`.
   */
  syncStream: (stream: Stream, earliestDataCutoff: Date) => Promise<void>

  /* An optional method planned for future use to support syncing data for
   * specific entities within a stream in response to events like webhooks.
   */
  syncEntity?: (stream: Stream, entity: object) => Promise<void>
}

export abstract class AbstractClient {
  constructor(
    public configuration: ClientConfiguration,
    public recordProducer: RecordProducer,
    public stateManager: StateManager,
    public logger: Logger
  ) {
  }
}
