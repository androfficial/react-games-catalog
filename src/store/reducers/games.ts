/* eslint-disable default-param-last */
import { IGame, TGamesAction, Types } from '../../types/games';

const initialState = {
  listOfGames: [] as IGame[],
  gamesCount: null as unknown as number,
  pageSize: 12,
  currentPage: 1,
  isLoaded: false,
  errorApi: false,
};

type TGamesInitialState = typeof initialState;

const games = (
  state = initialState,
  action: TGamesAction
): TGamesInitialState => {
  switch (action.type) {
    case Types.SET_GAMES:
      return {
        ...state,
        listOfGames: action.payload,
        gamesCount: action.payload.length,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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

export default games;
