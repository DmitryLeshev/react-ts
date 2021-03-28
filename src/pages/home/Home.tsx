import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";

import { Lang, Languages } from "../../types/Languages";

import { changeLanguage, changeMode } from "../../lib";
import {
  useActions,
  useTypedSelector,
  useDebounce,
  useSnackbar,
  useColorPicker,
} from "../../hooks";

import { ColorPicker } from "../../components";
// import useRouter from "../../hooks/useRouter";

export default () => {
  const { mode, colors } = useTypedSelector((state) => state.app);
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

  useEffect(() => {
    console.log("[Home] mount");
    return () => {
      console.log("[Home] unmount");
    };
  }, []);

  return (
    <div>
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
        </Grid>
      </Box>
    </div>
  );
};
