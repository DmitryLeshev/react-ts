import { Dispatch } from "react";
import { Lang, Colors, Mode } from "../types/app";
import { RootState } from "../reducers";
import { AppAction } from "../types/app";

import actions from "../actions";

const { changeColor, changeLang, changeMode, ready, changeChat } = actions.app;

export const appReady = (boolean: boolean) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState
) => {
  dispatch(ready(boolean));
};

export const appChangeColors = (colors: Colors) => async (
  dispatch: Dispatch<AppAction>
) => {
  dispatch(changeColor(colors));
};

export const appChangeLang = (lang: Lang) => async (
  dispatch: Dispatch<AppAction>
) => {
  dispatch(changeLang(lang));
};

export const appChangeMode = (mode: Mode) => async (
  dispatch: Dispatch<AppAction>
) => {
  dispatch(changeMode(mode));
};

export const appChangeChat = () => async (dispatch: Dispatch<AppAction>) => {
  dispatch(changeChat());
};
