import { Action, createReducer, on } from '@ngrx/store';
import { BoardTile } from '../types/board-tile.type';

export interface BoardState {
  board: {
    boardTiles: BoardTile[][];
  };
}

const initialState: BoardState = {
  board: {
    boardTiles: [],
  },
};

const featureReducer = createReducer(
  initialState,
  on((state: BoardState, payload: { type: string }) => {
    console.log(payload);
    return {
      ...state,
    };
  })
);

export function boardReducer(
  state: BoardState | undefined,
  action: Action
): BoardState {
  return featureReducer(state, action);
}
