import { getDialect } from '@functions/getDialect';
import { Dialect } from '@classes/Dialect';
import { expect } from 'chai';
import { registerDialect } from '@functions/registerDialect';
import { CsvError } from '@classes/CsvError';

describe('test getDialect', () => {
  it('should return predefined dialect', () => {
    const dialect = getDialect('excel');
    expect(dialect instanceof Dialect);
  });

  it('should return custom dialect', () => {
    registerDialect('Some Dialect');
    const dialect = getDialect('Some Dialect');
    expect(dialect instanceof Dialect);
  });

  it('should throw error when dialect name was not passed', () => {
    expect(getDialect).to.throw(TypeError, "missing required argument 'name'");
  });

  it('should throw error when dialect was not found', () => {
    expect(() => getDialect('dd')).to.throw(CsvError, 'unknown dialect');
  });

  it('should throw error when dialect is of wrong type', () => {
    // @ts-expect-error Test for wrong argument type
    expect(() => getDialect(1)).to.throw(CsvError, 'unknown dialect');
  });
});
