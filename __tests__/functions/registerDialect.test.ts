import { registerDialect } from '@functions/registerDialect';
import { Dialect } from '@classes/Dialect';
import { resetState } from '@state';
import { expect } from 'chai';
import { listDialects } from '@functions/listDialects';

describe('test registerDialect', () => {
  beforeEach(() => {
    resetState();
  });

  it('should throw if name is not provided', () => {
    expect(registerDialect).to.throw(TypeError, 'expected at least 1 argument, got 0');
  });

  it('should throw error if name is not a string', () => {
    // @ts-expect-error Test for wrong argument type
    expect(() => registerDialect(1)).to.throw(TypeError, 'dialect name must be a string');
  });

  it('should register new dialect', () => {
    const dialect = new Dialect();
    registerDialect('New Dialect', dialect);
    expect(listDialects()).to.include('New Dialect');
  });

  it('should register new dialect by options', () => {
    registerDialect('Some Dialect', { delimiter: ';' });
    expect(listDialects()).to.include('Some Dialect');
  });

  it('should register new dialect with overwrite params', () => {
    const dialect = new Dialect();
    registerDialect('New Dialect', dialect, { delimiter: ';' });
    expect(listDialects()).to.include('New Dialect');
  });
});
