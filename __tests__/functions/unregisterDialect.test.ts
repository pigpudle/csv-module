import { unregisterDialect } from '@functions/unregisterDialect';
import { listDialects } from '@functions/listDialects';
import { registerDialect } from '@functions/registerDialect';
import { CsvError } from '@classes/CsvError';
import { expect } from 'chai';

describe('test unregisterDialect', () => {
  it('should throw if name is not provided', () => {
    expect(unregisterDialect).to.throw(TypeError, 'expected at least 1 argument, got 0');
  });

  it('should unregiser default dialect', () => {
    unregisterDialect('excel-tab');
    const dialects = listDialects();
    expect(dialects).to.deep.equal(['excel', 'unix']);
  });

  it('should unregiser custom dialect', () => {
    registerDialect('newDialect');
    unregisterDialect('newDialect');
    const dialects = listDialects();
    expect(dialects).to.deep.equal(['excel', 'excel-tab', 'unix']);
  });

  it("should throw error if dialect doesn't exist", () => {
    expect(() => unregisterDialect('notExisting')).to.throw(CsvError, 'unknown dialect');
  });
});
