import { BoardState, boardReducer } from './board.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface GameState {
  board: BoardState
}

export const gameReducers: ActionReducerMap<GameState> = {
  board: boardReducer
};

export const getGameState =
  createFeatureSelector<GameState>('game');
