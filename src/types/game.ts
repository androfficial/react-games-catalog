export enum Types {
  SET_GAME_DETAILS = 'GAME@SET:GAME_DETAILS',
  SET_IS_LOADED = 'GAME@SET:IS_LOADED',
  SET_ERROR_API = 'GAME@SET:ERROR_API',
}

export interface IGameScreenshots {
  id: number;
  image: string;
}

export interface IGameSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface IGameDetails {
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  minimum_system_requirements: IGameSystemRequirements;
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: IGameScreenshots[];
  short_description: string;
  status: string;
  thumbnail: string;
  title: string;
}

export interface ISetGameDetailsAction {
  type: Types.SET_GAME_DETAILS;
  payload: IGameDetails;
}

export interface ISetIsLoadedAction {
  type: Types.SET_IS_LOADED;
  payload: boolean;
}

export interface ISetErrorApiAction {
  type: Types.SET_ERROR_API;
  payload: boolean;
}

export type TGameAction =
  | ISetGameDetailsAction
  | ISetIsLoadedAction
  | ISetErrorApiAction;
