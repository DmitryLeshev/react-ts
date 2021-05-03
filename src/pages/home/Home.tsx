import React, { useEffect } from "react";

import { ITheme } from "../../types/Theme";
import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";
import { Counter } from "../../components";
import { useActions, useTypedSelector } from "../../hooks";

export default () => {
  const classes = useStyles();
  const { count, user } = useTypedSelector((state) => state);
  const {
    incrementCount,
    decrementCount,
    incrementCountAsync,
    fetchTodos,
    fetchUsers,
  } = useActions();

  useEffect(() => {
    console.log("[Page Home] mount");
    fetchTodos();
    fetchUsers();
    return () => {
      console.log("[Page Home] unmount");
    };
  }, []);

  console.log(user);

  const counterProps = {
    value: count.count,
    onIncrement: incrementCount,
    onDecrement: decrementCount,
    onIncrementAsync: incrementCountAsync,
  };

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.wrapper} component={Paper} item xs={6}>
        Page Home
        <Counter {...counterProps} />
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
