import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface GameState {
}

export const gameReducers: ActionReducerMap<GameState> = {
};

export const getGameState =
  createFeatureSelector<GameState>('game');
