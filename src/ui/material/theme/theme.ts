import { createMuiTheme } from "@material-ui/core";
import React from "react";
import { Colors, Mode } from "../../../types/Theme";

interface Props {
  type: Mode;
  colors: Colors;
}

export const useCustomTheme = (props: Props) => {
  const { type, colors } = props;
  const theme = React.useMemo(
    () =>
      createMuiTheme(
        {
          palette: {
            type,
            primary: {
              main: colors.primary,
            },
            secondary: {
              main: colors.secondary,
            },
          },
        },
        {
          sidenav: {
            closeWidth: 64,
            openWidth: 220,
          },
          header: {
            height: 72,
          },
          main: {},
        }
      ),
    // eslint-disable-next-line
    [props]
  );

  return theme;
};

export default useCustomTheme;
