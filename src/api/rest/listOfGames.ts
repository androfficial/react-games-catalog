import axios, { AxiosError } from 'axios';

import { IGame } from '../../types/games';
import { instance } from '../api';
import { catchError } from '../config';

export const getGames = async () => {
  try {
    const { data } = await instance.get<IGame[]>('games');

    return data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      catchError(error);
      return false;
    }
    console.error(error);
    return false;
  }
};
