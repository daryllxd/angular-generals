import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '@angular-generals/game/lib/actions/board.actions';

@Component({
  selector: 'angular-generals-root',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(actions.InitializeBoard());
  }
}
