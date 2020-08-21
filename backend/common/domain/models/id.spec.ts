import * as faker from 'faker';
import { InvalidId } from '../exceptions';
import { Id } from './id';
import { ValueObject } from './value-object';

describe('Id', () => {
  it('is a value object', () => {
    const uuid = faker.random.uuid();
    const id = Reflect.construct(Id, [uuid]);

    expect(id).toBeInstanceOf(ValueObject);
  });

  it('can not have an invalid uuid value', () => {
    const invalidUuid = faker.random.alphaNumeric();

    expect(() => Reflect.construct(Id, [invalidUuid])).toThrow(
      InvalidId.causeIsNotAValidUuid(invalidUuid),
    );
  });
});
