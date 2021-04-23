import React, { useEffect, useState } from "react";

import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";

import useInput from "../../hooks/useInput";
import { ITheme } from "../../types/Theme";

export default (props: any) => {
  const classes = useStyles(props);
  const [state, setState] = useState<any>(null);
  const key = useInput({ initialValue: "" });
  const value = useInput({ initialValue: "" });

  useEffect(() => {
    console.log("[Auth] mount");

    return () => {
      console.log("[Auth] unmount");
    };
  }, []);

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

  console.log("state", state);

  return (
    <div className={classes.container}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={3}>
          <TextField {...key} label="Key" />
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
    </div>
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
