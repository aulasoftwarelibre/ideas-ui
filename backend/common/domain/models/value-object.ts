interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  protected constructor(props: T) {
    this.props = Object.freeze(props);
  }

  equals(other: ValueObject<T>): boolean {
    if (this.constructor !== other.constructor) {
      return false;
    }

    return (
      Object.keys(other.props).length === Object.keys(this.props).length &&
      Object.keys(other.props).every(
        (key) =>
          this.props.hasOwnProperty(key) && other.props[key] === this.props[key]
      )
    );
  }
}
