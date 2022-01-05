export enum Types {
  SET_GAMES = 'GAMES@SET:GAMES',
  SET_IS_LOADED = 'GAMES@SET:IS_LOADED',
  SET_CURRENT_PAGE = 'GAMES@SET:CURRENT_PAGE',
  SET_ERROR_API = 'GAMES@SET:ERROR_API',
}

export interface IGame {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
}

export interface IPagination {
  gamesCount: number;
  pageSize: number;
  currentPage: number;
}

export interface ISetGamesAction {
  type: Types.SET_GAMES;
  payload: IGame[];
}

export interface ISetIsLoadedAction {
  type: Types.SET_IS_LOADED;
  payload: boolean;
}

export interface ISetCurrentPageAction {
  type: Types.SET_CURRENT_PAGE;
  payload: number;
}

export interface ISetErrorApiAction {
  type: Types.SET_ERROR_API;
  payload: boolean;
}

export type TGamesAction =
  | ISetGamesAction
  | ISetIsLoadedAction
  | ISetCurrentPageAction
  | ISetErrorApiAction;
