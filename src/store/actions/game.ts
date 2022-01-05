import { Dispatch } from 'redux';

import { getGameDetails } from '../../api/rest/gameDetails';
import { IGameDetails, TGameAction, Types } from '../../types/game';

export const setGameDetails = (payload: IGameDetails): TGameAction => ({
  type: Types.SET_GAME_DETAILS,
  payload,
});

export const setIsLoaded = (payload: boolean): TGameAction => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload: boolean): TGameAction => ({
  type: Types.SET_ERROR_API,
  payload,
});

type TGameDispatch = Dispatch<TGameAction>;

export const fetchGame = (id: string) => async (dispatch: TGameDispatch) => {
  const response = await getGameDetails(id);
  if (response) {
    dispatch(setGameDetails(response));
    dispatch(setIsLoaded(true));
  } else {
    dispatch(setErrorApi(true));
  }
};
