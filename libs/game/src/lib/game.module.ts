import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { gameReducers } from './reducers/index';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', gameReducers)
  ],
})
export class GameModule {}
