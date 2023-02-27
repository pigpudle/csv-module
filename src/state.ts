import { DEFAULT_FIELD_SIZE_LIMIT } from '@constants';
import { excelDialect, excelTabDialect, unixDialect } from '@predefinedDialects';
import { IState } from '@types';

const defaultState: IState = {
  fieldSizeLimit: DEFAULT_FIELD_SIZE_LIMIT,
  dialects: new Map([
    ['excel', excelDialect],
    ['excel-tab', excelTabDialect],
    ['unix', unixDialect],
  ]),
};

function deepCopyState(state: IState): IState {
  return {
    ...state,
    dialects: new Map(state.dialects),
  };
}

export let state: IState = deepCopyState(defaultState);

// internal function
export const resetState = () => {
  state = deepCopyState(defaultState);
};
