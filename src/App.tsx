import { Box, Button, CssBaseline, Grid, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Home } from "./pages";
import { store } from "./store/store";
import { useCustomTheme, Mode, Modes } from "./ui/theme/theme";
import { ColorPicker } from "./components";
import useColorPicker from "./hooks/useColorPicker";

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>("light");

  const primary = useColorPicker("#000");
  const secondary = useColorPicker("#333");

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

  return (
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={testTheme}>
          <CssBaseline />
          <Home />
          <Box margin={3} padding={3} component={Paper}>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Button
                  onClick={changeMode}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  primary
                </Button>
              </Grid>

              <Grid item>
                <Button color="secondary" size="small" variant="contained">
                  secondary
                </Button>
              </Grid>

              <Grid>
                <ColorPicker
                  color={primary.color}
                  onChangeComplete={primary.changeColor}
                />
              </Grid>

              <Grid>
                <ColorPicker
                  color={secondary.color}
                  onChangeComplete={secondary.changeColor}
                />
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </React.StrictMode>
    </Provider>
  );
};

export default App;
