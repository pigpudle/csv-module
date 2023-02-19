import { state } from '@state';
import { TListDialectsFunction } from '@types';

// TODO: get to know in which order does this function should return entries?
// are they sorted or not?
// if they follow inserting order principle -> use Map data structure instead
export const listDialects: TListDialectsFunction = () => {
  return Array.from(state.dialects.keys());
};
