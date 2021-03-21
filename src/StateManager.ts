export interface State {
  // The point in time of the data within the stream the connector last
  // processed. E.g. if the connector is processing a `syncStream` back to
  // is walking through pages of entities, and sets a checkpoint after each page
  // is complete, the connector would set this field to the `createdAt` of the
  // last entity within the just-processed-page when setting `State`.
  checkpointTime: Date,

  // Opptional metadata related to the checkpoint the connector may need to
  // start a sync from the same point it left off
  metadata?: object
}

export interface StateManager {
  set: (State) => void
  get: () => State | null
}
