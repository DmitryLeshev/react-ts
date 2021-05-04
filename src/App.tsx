import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

import { useTranslation } from "react-i18next";

import {
  CssBaseline,
  LinearProgress,
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { useCustomTheme } from "./ui/material/theme/theme";

import { useTypedSelector } from "./hooks";

const App: React.FC = () => {
  const classes = useStyles();
  const { colors, mode } = useTypedSelector((state) => state.app.theme);
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
      <SnackbarProvider>
        <CssBaseline />
        <Suspense fallback="loading">{renderRoutes(routes)}</Suspense>
      </SnackbarProvider>
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

// [x] - Установить зависмости [mobx, saga, bootstrap, styled-component, react-transition-group]
// [x] - Проверить работу способность redux thunks и saga
// [x] - Подключить mobx, bootstrap, styled-component, css.modules
// [ ] - Сверстать страницу Регистрации
// [ ] - Сверстать страницу Авторизации
// [ ] - Сверстать Лэйаут
// [ ] - Сверстать Навигационную панель
