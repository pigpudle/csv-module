import { DEFAULT_FIELD_SIZE_LIMIT } from "./constants";
import { IState } from "./types";

const defaultState: IState = {
  fieldSizeLimit: DEFAULT_FIELD_SIZE_LIMIT
};

export const state: IState = {...defaultState};

// internal function
export const resetState = () => {
  for (const key in defaultState) {
    state[key as keyof IState] = defaultState[key as keyof IState];
  }
};