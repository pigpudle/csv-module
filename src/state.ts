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

export let state: IState = { ...defaultState };

// internal function
export const resetState = () => {
  state = { ...defaultState };
};
