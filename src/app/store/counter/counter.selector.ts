import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

// Getting store instance
export const selectCouterState = (state: AppState) => state.counter;

// export const selectUserDate = (state: AppState) => state.user;

export const selectCount = createSelector(
  selectCouterState,
  (state) => state.count
);
