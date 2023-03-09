import { state } from '@state';
import { TGetDialectFunction } from '@types';
import { CsvError } from '@classes/CsvError';

export const getDialect: TGetDialectFunction = (name) => {
  if (name === undefined) {
    throw new TypeError("missing required argument 'name'");
  }

  if (!state.dialects.has(name)) {
    throw new CsvError('unknown dialect');
  }

  return state.dialects.get(name)!;
};
