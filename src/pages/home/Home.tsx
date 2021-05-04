import React, { useEffect, useRef } from "react";

import { Button } from "react-bootstrap";

import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";
import { ITheme } from "../../types/Theme";

import { observer } from "mobx-react-lite";
import counter from "../../stores/mobX/count";
import todo from "../../stores/mobX/todo";

import { Counter } from "../../components";
import { Title } from "../../ui/styled-components/components";
import { Input } from "../../ui/native/components";

// import { useActions, useTypedSelector } from "../../hooks";

export default observer(() => {
  const classes = useStyles();
  // const { count, user } = useTypedSelector((state) => state);
  // const {
  //   incrementCount,
  //   decrementCount,
  //   incrementCountAsync,
  //   fetchUsersSaga,
  // } = useActions();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("[Page Home] mount");
    inputRef.current?.focus();

    return () => {
      console.log("[Page Home] unmount");
    };
  }, []);

  const counterProps = {
    value: counter.value,
    onIncrement: () => counter.increment(),
    onDecrement: () => counter.decrement(),
    onIncrementAsync: () => setTimeout(() => counter.increment(), 1000),
  };

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.wrapper} component={Paper} item xs={6}>
        <Title>Page Home (styled-compenents)</Title>
        <Counter {...counterProps} />
        <Input ref={inputRef} />
        <Button
          variant="success"
          className="mb-2 mt-2"
          onClick={() => {
            todo.addTodo({
              id: todo?.todos[todo?.todos?.length - 1]?.id + 1 || 1,
              title: inputRef.current?.value,
              completed: false,
            });
          }}
        >
          Add
        </Button>
        {todo.todos.map((t) => (
          <div
            className="mb-2"
            key={t.id}
            onClick={() => todo.completedTodo(t)}
          >
            {t.completed ? "[ v ]" : "[ x ]"} {t.title}
            <button
              className="ml-2 btn btn-outline-danger btn-sm"
              onClick={() => todo.removeTodo(t)}
            >
              Del
            </button>
          </div>
        ))}
      </Grid>
    </Grid>
  );
});

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
