import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import React, { useState } from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { Chat } from "../../components";
import { useTypedSelector } from "../../hooks";
import { ITheme } from "../../types/Theme";

interface Props {
  route: any;
}

export default (props: Props) => {
  const { route } = props;
  const classes = useStyles();
  const { isLogged } = useTypedSelector((state) => state.app);
  const [sidenav, setSidenav] = useState(false);
  return (
    <>
      <header className={classes.header}>Header</header>
      <nav
        onMouseEnter={(e) => setSidenav(true)}
        onMouseLeave={(e) => setSidenav(false)}
        className={clsx(classes.sidenav, { [classes.sidenavShift]: sidenav })}
      >
        <Link to={`/`}>Home</Link>
        <Link to={`/auth`}>Auth</Link>
        <Link to={`/users`}>Users</Link>
        <Link to={`/settings`}>Settings</Link>
      </nav>
      <main className={clsx(classes.main, { [classes.mainShift]: sidenav })}>
        {renderRoutes(route.routes)}
        {isLogged && <Chat />}
      </main>
    </>
  );
};

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    header: {
      width: "100%",
      background: theme.palette.primary.dark,
      height: theme.header.height,
    },
    main: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      width: `calc(100% - ${theme.sidenav.closeWidth}px)`,
      marginLeft: theme.sidenav.closeWidth,
      background: theme.palette.primary.main,
      transition: "all 0.3s",
    },
    mainShift: {
      width: `calc(100% - ${theme.sidenav.openWidth}px)`,
      marginLeft: theme.sidenav.openWidth,
      transition: "all 0.3s",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: 0,
      },
    },
    sidenav: {
      position: "absolute",
      top: theme.header.height,
      bottom: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      width: theme.sidenav.closeWidth,
      background: theme.palette.primary.light,
      transition: "all 0.3s",
    },
    sidenavShift: {
      width: theme.sidenav.openWidth,
    },
  })
);
