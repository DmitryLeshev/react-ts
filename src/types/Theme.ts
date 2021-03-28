import { Theme } from "@material-ui/core";

export type Mode = "dark" | "light";

export enum Modes {
  DARK = "dark",
  LIGHT = "light",
}

export type Color = string;

export interface Colors {
  primary: Color;
  secondary: Color;
}

export interface ITheme extends Theme {
  sidenav: {
    closeWidth: number;
    openWidth: number;
  };
  header: {
    height: number;
  };
}
