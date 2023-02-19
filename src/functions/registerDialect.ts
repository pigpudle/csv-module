import { state } from '@state';
import { TRegisterDialectFunction } from '@types';
import { Dialect } from '@classes/Dialect';

export const registerDialect: TRegisterDialectFunction = (name, dialectOrFmtParams, overwritemtParams) => {
  if (name === undefined) {
    throw new TypeError('expected at least 1 argument, got 0');
  }

  if (typeof name !== 'string') {
    throw new TypeError('dialect name must be a string');
  }

  let dialect: Dialect;

  if (dialectOrFmtParams instanceof Dialect) {
    dialect = dialectOrFmtParams;
  } else {
    dialect = new Dialect(dialectOrFmtParams);
  }

  if (overwritemtParams) {
    dialect._overwriteParams(overwritemtParams);
  }

  state.dialects.set(name, dialect);
};
