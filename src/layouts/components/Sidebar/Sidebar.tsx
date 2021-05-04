import React from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import { ITheme } from "../../../types/Theme";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface Props {
  sidenav: boolean;
  setSidenav: (boolean: boolean) => void;
}

export default function Sidebar(props: Props) {
  const classes = useStyles();
  const { setSidenav, sidenav } = props;
  return (
    <nav
      onMouseEnter={(e) => setSidenav(true)}
      onMouseLeave={(e) => setSidenav(false)}
      className={clsx(classes.sidenav, { [classes.sidenavShift]: sidenav })}
    >
      <Link className={classes.link} to={`/`}>
        Home
      </Link>
      <Link className={classes.link} to={`/auth`}>
        Auth
      </Link>
      <Link className={classes.link} to={`/users`}>
        Users
      </Link>
      <Link className={classes.link} to={`/settings`}>
        Settings
      </Link>
    </nav>
  );
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    sidenav: {
      position: "absolute",
      zIndex: theme.zIndex.drawer,
      top: theme.header.height,
      bottom: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      width: theme.sidenav.closeWidth,
      background: theme.palette.primary.main,
      boxShadow: theme.shadows[3],
      transition: "all 0.3s",
    },
    sidenavShift: {
      width: theme.sidenav.openWidth,
    },
    link: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  })
);
