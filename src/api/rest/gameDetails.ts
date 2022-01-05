import axios, { AxiosError } from 'axios';

import { IGameDetails } from '../../types/game';
import { instance } from '../api';
import { catchError } from '../config';

export const getGameDetails = async (id: string) => {
  try {
    const { data } = await instance.get<IGameDetails>(`game?id=${id}`);

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
