import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

import { Lang, Languages } from "../../types/Languages";

import { changeLanguage, changeMode } from "../../lib";
import {
  useActions,
  useTypedSelector,
  useDebounce,
  useSnackbar,
  useColorPicker,
  useInput,
} from "../../hooks";

import { ColorPicker } from "../../components";
import { ITheme } from "../../types/Theme";
// import useRouter from "../../hooks/useRouter";

export default (props: any) => {
  // eslint-disable-next-line
  const classes = useStyles(props);
  const { mode, colors } = useTypedSelector((state) => state.app.theme);
  const { appChangeColors, appChangeMode, appChangeLang } = useActions();
  const { t } = useTranslation(["home", "settings"]);

  // const { params } = useRouter();

  const snackbar = useSnackbar();
  const primary = useColorPicker(colors.primary);
  const secondary = useColorPicker(colors.secondary);

  const debouncedChangeColors = useDebounce({
    callback: handlerChangeColors,
    delay: 100,
  });

  const pages: Array<string> = t("translation:pages", { returnObjects: true });

  function handlerChangeLanguage(lang: Lang) {
    changeLanguage(lang);
    appChangeLang(lang);
  }

  function handlerChangeMode() {
    appChangeMode(changeMode(mode));
  }

  function handlerChangeColors() {
    console.log("handlerChangeColors");
    appChangeColors({
      primary: primary.color,
      secondary: secondary.color,
    });
    snackbar({
      msg: `[primary: "${primary.color}"] [secondary: "${secondary.color}"]`,
      variant: "success",
    });
  }

  // eslint-disable-next-line
  const [state, setState] = useState<any>(null);
  // eslint-disable-next-line
  const { clear: keyClear, ...key } = useInput({ initialValue: "" });
  // eslint-disable-next-line
  const { clear: valueClear, value } = useInput({ initialValue: "" });

  function set({ key, value }: { key: string; value: string }) {
    console.log("localStorage.setItem: key = ", key, "valeu = ", value);
    localStorage.setItem(key, value);
  }

  function get({ key }: { key: string }) {
    console.log("localStorage.getItem: key = ", key);
    return localStorage.getItem(key);
  }

  function remove({ key }: { key: string }) {
    console.log("localStorage.removeItem: key = ", key);
    return localStorage.removeItem(key);
  }

  function clear() {
    console.log("localStorage.clear");
    return localStorage.clear();
  }

  function handlerBtnGet() {
    const data = get({ key: key.value });
    setState(data);
  }

  function handlerBtnSet() {
    set({ key: key.value, value: value.value });
  }

  useEffect(() => {
    console.log("[Home] mount");
    return () => {
      console.log("[Home] unmount");
    };
  }, []);

  return (
    <Box margin={3} padding={3} component={Paper}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}>
          <Typography color="textPrimary" variant="h3">
            {t("home:title")}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography color="textPrimary" variant="h3">
            {t("settings:description.part1", { x: "X" })}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          {pages &&
            pages.map((el) => (
              <Typography key={el} color="textPrimary" variant="h3">
                {el}
              </Typography>
            ))}
        </Grid>

        <Grid item xs={4}>
          <Button
            onClick={handlerChangeMode}
            color="primary"
            size="large"
            variant="contained"
          >
            Change Mode
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Button
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => handlerChangeLanguage(Languages.RU)}
          >
            RU
          </Button>
          <Button
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => handlerChangeLanguage(Languages.EN)}
          >
            EN
          </Button>
        </Grid>

        <Grid item xs={6}>
          <ColorPicker
            color={primary.color}
            onChangeComplete={(color) => {
              primary.changeColor(color);
              debouncedChangeColors();
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <ColorPicker
            color={secondary.color}
            onChangeComplete={(color) => {
              secondary.changeColor(color);
              debouncedChangeColors();
            }}
          />
        </Grid>

        <Grid item xs={3}>
          <TextField {...key} label="Key" />
        </Grid>

        <Grid item xs={3}>
          <TextField {...value} label="Value" />
        </Grid>

        <Grid item xs={3}>
          <Button onClick={handlerBtnGet}>Get Local Storage</Button>
        </Grid>

        <Grid item xs={3}>
          <Button onClick={handlerBtnSet}>Set Local Storage</Button>
        </Grid>

        <Grid item xs={3}>
          <Button onClick={() => remove({ key: key.value })}>
            Remove Local Storage
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button onClick={clear}>Clear Local Storage</Button>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} alignItems="center">
      </Grid> */}
    </Box>
  );
};

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
