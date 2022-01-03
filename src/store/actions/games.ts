import { Dispatch } from 'redux';

import { getGames } from '../../api/rest/listOfGames';
import { IGame, TGamesAction, Types } from '../../types/games';

export const setGames = (payload: IGame[]): TGamesAction => ({
  type: Types.SET_GAMES,
  payload,
});

export const setIsLoaded = (payload: boolean): TGamesAction => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload: boolean): TGamesAction => ({
  type: Types.SET_ERROR_API,
  payload,
});

type TGamesDispatch = Dispatch<TGamesAction>;

export const fetchGames = () => async (dispatch: TGamesDispatch) => {
  const response = await getGames();
  if (response) {
    dispatch(setGames(response));
    dispatch(setIsLoaded(true));
  } else {
    dispatch(setErrorApi(true));
  }
};
