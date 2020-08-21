import { validate } from 'uuid';

import { InvalidId } from '../exceptions';
import { ValueObject } from './value-object';

export interface Props {
  value: string;
}

export abstract class Id extends ValueObject<Props> {
  protected constructor(id: string) {
    if (!validate(id)) {
      throw InvalidId.causeIsNotAValidUuid(id);
    }
    super({ value: id });
  }

  get value(): string {
    return this.props.value;
  }
}
