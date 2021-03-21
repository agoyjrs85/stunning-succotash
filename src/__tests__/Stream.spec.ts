import { Stream } from "../Stream"

describe(Stream, () => {
  test("can be constructed from a valid Stream", () => {
    const stream = new Stream({
      type: "Stream",
      attributes: {
        id: "a1b2",
        self: "schema://id",
        name: "foo"
      }
    })

    expect(stream.id).toEqual("a1b2")
    expect(stream.name).toEqual("foo")
  })

  test("it raises if provided record isn't valid", () => {
    expect(
      () => new Stream({})
    ).toThrow

    expect(
      () => new Stream({ type: "Foo" })
    ).toThrow

    expect(
      () => new Stream({ type: "Incident", attributes: { "id": "foo" } })
    ).toThrow
  })
})
