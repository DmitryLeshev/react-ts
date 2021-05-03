import { Action } from ".";

export type Lang = "en" | "ru";

export enum Languages {
  EN = "en",
  RU = "ru",
}

export enum Modes {
  DARK = "dark",
  LIGHT = "light",
}

export enum ChatVariant {
  FOLDED = "folded",
  DEPLOYED = "deploed",
}

export type Mode = "dark" | "light";

export type Color = string;

export interface Colors {
  primary: Color;
  secondary: Color;
}

export enum AppActionTypes {
  READY = "[app] ready",
  CHANGE_MODE_THEME = "[app] change mode",
  CHANGE_COLORS = "[app] change colors ",
  CHANGE_LANGUAGE = "[app] change language",
  CHANGE_CHAT = "[app] change variant chat",
}

export interface AppState {
  ready: boolean;
  isLogged: boolean;
  isOpenChat: boolean;
  theme: {
    mode: Mode;
    colors: Colors;
  };
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

export interface AppChangeChat {
  type: AppActionTypes.CHANGE_CHAT;
}

export type AppAction =
  | AppReady
  | AppChangeColors
  | AppChangeMode
  | AppChangeLanguage
  | AppChangeChat;
