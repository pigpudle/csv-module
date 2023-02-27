import { CsvError } from '@classes/CsvError';
import { state } from '@state';
import { TUnregisterDialectFunction } from '@types';

export const unregisterDialect: TUnregisterDialectFunction = (name) => {
  if (name === undefined) {
    throw new TypeError('expected at least 1 argument, got 0');
  }

  if (state.dialects.has(name)) {
    state.dialects.delete(name);
  } else {
    throw new CsvError('unknown dialect');
  }
};
