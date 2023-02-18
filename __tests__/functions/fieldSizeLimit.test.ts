import { expect } from 'chai';
import { fieldSizeLimit } from '../../src/functions/fieldSizeLimit';
import { resetState } from '../../src/state';

describe('test fieldSizeLimit', () => {
  beforeEach(() => {
    resetState();
  });

  describe('test getter', () => {
    it('should return default value of 131072', () => {
      const result = fieldSizeLimit();
      expect(result).to.equal(131072);
    });
  });

  describe('test setter', () => {
    it('should set value and return prev value, then new value', () => {
      const value = 102400;
      const prevValue = fieldSizeLimit(value);
      expect(prevValue).to.equal(131072);

      const newValue = fieldSizeLimit();
      expect(newValue).to.be.equal(value);
    });

    it('should pass with 0 value', () => {
      const value = 0;
      const prevValue = fieldSizeLimit(value);
      expect(prevValue).to.equal(131072);

      const newValue = fieldSizeLimit();
      expect(newValue).to.be.equal(value);
    });

    it('should pass with negative values', () => {
      const value = -1;
      const prevValue = fieldSizeLimit(value);
      expect(prevValue).to.equal(131072);

      const newValue = fieldSizeLimit();
      expect(newValue).to.be.equal(value);
    });
  });
});