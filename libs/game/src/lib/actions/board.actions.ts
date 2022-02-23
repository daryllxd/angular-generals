import { createAction } from '@ngrx/store';

export enum BoardActionTypes {
  INITIALIZE_BOARD = '[Board] Initialize Board',
  PLACE_PIECES = '[Board] Place Pieces',
}

export const InitializeBoard = createAction(BoardActionTypes.INITIALIZE_BOARD);

export const PlacePieces = createAction(BoardActionTypes.PLACE_PIECES);
