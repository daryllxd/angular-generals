import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';

export interface User {
  name: string;
}

type rank = 'sergeant' | 'spy' | 'private' | 'flag';

export interface Piece {
  player: User;
  rank: rank;
}

export interface BoardTile {
  piece: Piece | null;
}

export interface Board {
  boardTiles: BoardTile[][];
}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, HeaderComponent, BoardComponent],
  exports: [BoardComponent, ButtonComponent, HeaderComponent],
})
export class UiModule {}
