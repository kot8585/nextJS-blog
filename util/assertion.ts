export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
      throw new Error(`Node expected : ${e}`);
  }
}

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if( value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }
}