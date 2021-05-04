import React from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import { ITheme } from "../../../types/Theme";

interface Props {}

export default function Topbar(props: Props) {
  const classes = useStyles();

  return <header className={classes.header}>Header</header>;
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    header: {
      width: "100%",
      background: theme.palette.primary.dark,
      height: theme.header.height,
    },
  })
);
