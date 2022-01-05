/* eslint-disable default-param-last */

import { IGameDetails, TGameAction, Types } from '../../types/game';

const initialState = {
  gameDetails: {} as IGameDetails,
  isLoaded: false,
  errorApi: false,
};

type TGameInitialState = typeof initialState;

const game = (state = initialState, action: TGameAction): TGameInitialState => {
  switch (action.type) {
    case Types.SET_GAME_DETAILS:
      return {
        ...state,
        gameDetails: action.payload,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    default:
      return state;
  }
};

export default game;
