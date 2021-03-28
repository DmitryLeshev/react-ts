import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import React, { useState } from "react";
import { renderRoutes } from "react-router-config";
import { ITheme } from "../../types/Theme";

interface Props {
  route: any;
}

export default (props: Props) => {
  const { route } = props;
  const classes = useStyles();
  const [sidenav, setSidenav] = useState(false);
  return (
    <>
      <header className={classes.header}>Header</header>
      <nav
        onMouseEnter={(e) => setSidenav(true)}
        onMouseLeave={(e) => setSidenav(false)}
        className={clsx(classes.sidenav, { [classes.sidenavShift]: sidenav })}
      >
        Navigation
      </nav>
      <main className={clsx(classes.main, { [classes.mainShift]: sidenav })}>
        Main
        {renderRoutes(route.routes)}
      </main>
    </>
  );
};

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    header: {
      width: "100%",
      background: theme.palette.error.main,
      height: theme.header.height,
    },
    main: {
      display: "flex",
      flexGrow: 1,
      width: `calc(100% - ${theme.sidenav.closeWidth}px)`,
      marginLeft: theme.sidenav.closeWidth,
      background: theme.palette.warning.main,
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
      width: theme.sidenav.closeWidth,
      background: theme.palette.success.main,
      transition: "all 0.3s",
    },
    sidenavShift: {
      width: theme.sidenav.openWidth,
    },
  })
);
