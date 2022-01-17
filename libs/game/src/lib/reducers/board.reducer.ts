import { Action, createReducer, on } from '@ngrx/store';

export interface BoardState {
  board: {
  };
}

const initialState: BoardState = {
  board: {},
};

const featureReducer = createReducer(
  initialState,
  on(
    (state: BoardState, payload: { type: string }) => {
      console.log(payload);
      return {
        ...state,
      };
    },
  ),
);

export function boardReducer(
  state: BoardState | undefined,
  action: Action,
): BoardState {
  return featureReducer(state, action);
}
