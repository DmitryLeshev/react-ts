import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { ITheme } from "../../types/Theme";

export default () => {
  const classes = useStyles();
  useEffect(() => {
    console.log("[Settings] mount");
    return () => {
      console.log("[Settings] unmount");
    };
  }, []);

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.wrapper} component={Paper} item xs={6}>
        <Card />
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
