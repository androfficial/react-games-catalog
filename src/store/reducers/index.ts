import { combineReducers } from 'redux';

import games from './games';

export const rootReducers = combineReducers({
  games,
});

export type RootState = ReturnType<typeof rootReducers>;
