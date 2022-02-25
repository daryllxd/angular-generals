import { Component, Input, OnInit } from '@angular/core';
import { Board } from '@angular-generals/game/lib/types/board.type';

@Component({
  selector: 'angular-generals-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() rows = 8;
  @Input() columns = 9;

  board: Board = {
    boardTiles: [],
  };

  ngOnInit(): void {
    this.board = {
      boardTiles: Array.from({ length: this.rows }, () =>
        Array.from({ length: this.columns }, () => {
          return { piece: null };
        })
      ),
    };

    this.board.boardTiles[0][1] = {
      piece: {
        player: {
          name: 'Johny',
        },
        rank: 'sergeant',
      },
    };

    this.board.boardTiles[2][1] = {
      piece: {
        player: {
          name: 'Johny',
        },
        rank: 'sergeant',
      },
    };

    this.board.boardTiles[2][2] = {
      piece: {
        player: {
          name: 'Johny',
        },
        rank: 'sergeant',
      },
    };

    console.log(this.board.boardTiles[0][1]);
    console.log(this.board.boardTiles[1][1]);
  }
}
