import {
  Box,
  Button,
  CssBaseline,
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { createStyles, ThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Home } from "./pages";
import { store } from "./store/store";
import { useCustomTheme, Mode, Modes } from "./ui/theme/theme";
import { ColorPicker } from "./components";
import useColorPicker from "./hooks/useColorPicker";
import { useTranslation } from "react-i18next";
import changeLanguage from "./lib/changeLanguage";
import getRandomInt from "./lib/getRandomInt";
import { languages } from "./types/Languages";

const App: React.FC = () => {
  const classes = useStyles();
  const [mode, setMode] = useState<Mode>("light");

  const primary = useColorPicker("#000");
  const secondary = useColorPicker("#333");

  const { t, ready } = useTranslation(["home", "settings"]);

  const testTheme = useCustomTheme({
    type: mode,
    colors: {
      primary: primary.color,
      secondary: secondary.color,
    },
  });

  function changeMode() {
    const newMode = mode === Modes.LIGHT ? Modes.DARK : Modes.LIGHT;
    setMode(newMode);
  }

  function handlerChangeLanguage() {
    changeLanguage(languages[getRandomInt({ min: 0, max: 1 })]);
  }

  if (!ready) {
    return (
      <div className={classes.root}>
        <LinearProgress />
        <LinearProgress color="secondary" />
      </div>
    );
  }

  const pages: Array<string> = t("translation:pages", { returnObjects: true });

  return (
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={testTheme}>
          <CssBaseline />
          <Home />
          <Box margin={3} padding={3} component={Paper}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={3}>
                <Button
                  onClick={changeMode}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  primary
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button
                  color="secondary"
                  size="small"
                  variant="contained"
                  onClick={handlerChangeLanguage}
                >
                  secondary
                </Button>
              </Grid>

              <Grid item xs={3}>
                <ColorPicker
                  color={primary.color}
                  onChangeComplete={primary.changeColor}
                />
              </Grid>

              <Grid item xs={3}>
                <ColorPicker
                  color={secondary.color}
                  onChangeComplete={secondary.changeColor}
                />
              </Grid>

              <Grid item xs={3}>
                <Typography color="textPrimary" variant="h3">
                  {t("home:title")}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography color="textPrimary" variant="h3">
                  {t("settings:description.part1", { x: "X" })}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                {pages &&
                  pages.map((el) => (
                    <Typography key={el} color="textPrimary" variant="h3">
                      {el}
                    </Typography>
                  ))}
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </React.StrictMode>
    </Provider>
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
