import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { selectCouterState } from './store/counter/counter.selector';
import { selectCount } from './store/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import {
  decrementCounter,
  incrementCounter,
} from './store/counter/counter.action';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngrx';
  counter$: Observable<number> = new Observable<number>();

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCount);
  }

  onInc() {
    this.store.dispatch(incrementCounter());
  }
  onDec() {
    this.store.dispatch(decrementCounter());
  }
}
