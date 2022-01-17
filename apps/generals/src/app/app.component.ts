import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '@angular-generals/game/lib/actions/board.actions';

@Component({
  selector: 'angular-generals-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'generals';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(actions.InitializeBoard());
  }
}
