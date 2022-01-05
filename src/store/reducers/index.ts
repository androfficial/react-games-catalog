import { combineReducers } from 'redux';

import game from './game';
import games from './games';

export const rootReducers = combineReducers({
  games,
  game,
});

export type RootState = ReturnType<typeof rootReducers>;
