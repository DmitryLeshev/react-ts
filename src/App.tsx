import React, { Suspense } from "react";
import {
  CssBaseline,
  LinearProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { createStyles, ThemeProvider } from "@material-ui/styles";
import { useCustomTheme } from "./ui/theme/theme";
import { useTranslation } from "react-i18next";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { useTypedSelector } from "./hooks";

const App: React.FC = () => {
  const classes = useStyles();
  const { colors, mode } = useTypedSelector((state) => state.app);
  const { ready: i18nReady } = useTranslation();

  const testTheme = useCustomTheme({
    type: mode,
    colors,
  });

  if (!i18nReady) {
    return (
      <div className={classes.root}>
        <LinearProgress />
        <LinearProgress color="secondary" />
      </div>
    );
  }

  return (
    <ThemeProvider theme={testTheme}>
      <CssBaseline />
      <Suspense fallback="loading">{renderRoutes(routes)}</Suspense>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default App;
