import { expect } from 'chai';
import { listDialects } from '@functions/listDialects';
import { registerDialect } from '@functions/registerDialect';

describe('test listDialects', () => {
  it('should return default dialects names', () => {
    const result = listDialects();
    expect(result).to.deep.equal(['excel', 'excel-tab', 'unix']);
  });

  it('should return default dialects names with new one after registering new dialect', () => {
    registerDialect('New Dialect');
    const result = listDialects();
    expect(result).to.deep.equal(['excel', 'excel-tab', 'unix', 'New Dialect']);
  });

  it('should return default dialects names without one after unregistering a dialect', () => {
    // TODO: test with unregisterDialect()
    // test order if needed
  });
});
