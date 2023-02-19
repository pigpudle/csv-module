import { state } from '@state';
import { TFieldSizeLimitFunction } from '@types';

export const fieldSizeLimit: TFieldSizeLimitFunction = (newLimit) => {
  const prevValue = state.fieldSizeLimit; // python csv returns prev value when setting a new one

  if (newLimit !== undefined) {
    if (typeof newLimit !== 'number') {
      throw new TypeError('limit must be an integer');
    }
    state.fieldSizeLimit = newLimit;
  }

  return prevValue;
};
