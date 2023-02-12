import { DEFAULT_FIELD_SIZE_LIMIT } from "./constants";
import { excelDialect, excelTabDialect, unixDialect } from "./predefinedDialects";
import { IState } from "./types";

const defaultState: IState = {
  fieldSizeLimit: DEFAULT_FIELD_SIZE_LIMIT,
  dialects: {
    // @ts-ignore TODO: ignored until Dialect class is fully implemented
    'excel': excelDialect,
    // @ts-ignore TODO: ignored until Dialect class is fully implemented
    'excel-tab': excelTabDialect,
    // @ts-ignore TODO: ignored until Dialect class is fully implemented
    'unix': unixDialect
  }
};

export let state: IState = {...defaultState};

// internal function
export const resetState = () => {
  state = {...defaultState};
};