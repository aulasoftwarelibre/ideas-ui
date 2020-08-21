export class InvalidId extends Error {
  static causeIsNotAValidUuid(uuid: string): InvalidId {
    return new this(`${uuid} is not a valid uuid.`);
  }

  private constructor(reason: string) {
    super(reason);
  }
}
