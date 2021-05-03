import React, { useEffect } from "react";

import { ITheme } from "../../types/Theme";
import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";

export default () => {
  const classes = useStyles();
  useEffect(() => {
    console.log("[Page Auth] mount");
    return () => {
      console.log("[Page Auth] unmount");
    };
  }, []);

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.wrapper} component={Paper} item xs={6}>
        Page Auth
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(3),
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
      minWidth: 600,
    },
  })
);
