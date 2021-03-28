import { Action } from ".";
import { Lang } from "../../types/Languages";
import { Colors, Mode } from "../../types/Theme";

export enum AppActionTypes {
  READY = "[app] ready",
  CHANGE_MODE_THEME = "[app] change mode",
  CHANGE_COLORS = "[app] change colors ",
  CHANGE_LANGUAGE = "[app] change language",
}

export interface AppState {
  ready: boolean;
  colors: Colors;
  mode: Mode;
  lang: Lang;
}

export interface AppReady extends Action {
  type: AppActionTypes.READY;
  payload: boolean;
}

export interface AppChangeColors {
  type: AppActionTypes.CHANGE_COLORS;
  payload: Colors;
}

export interface AppChangeMode {
  type: AppActionTypes.CHANGE_MODE_THEME;
  payload: Mode;
}

export interface AppChangeLanguage {
  type: AppActionTypes.CHANGE_LANGUAGE;
  payload: Lang;
}

export type AppAction =
  | AppReady
  | AppChangeColors
  | AppChangeMode
  | AppChangeLanguage;
