import { createMuiTheme } from "@material-ui/core";
import React from "react";

export type Mode = "dark" | "light";

export enum Modes {
  DARK = "dark",
  LIGHT = "light",
}

export interface IColors {
  primary: string;
  secondary: string;
}

interface Props {
  type: Mode;
  colors: IColors;
}

const theme = createMuiTheme({});

export const useCustomTheme = (props: Props) => {
  const { type, colors } = props;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type,
          primary: {
            main: colors.primary,
          },
          secondary: {
            main: colors.secondary,
          },
        },
      }),
    // eslint-disable-next-line
    [props]
  );

  return theme;
};

export default theme;
