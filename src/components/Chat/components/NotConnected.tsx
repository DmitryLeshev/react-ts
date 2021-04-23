import React from "react";

import {
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ITheme } from "../../../types/Theme";

interface Props {
  connect: () => void;
}

export default (props: Props) => {
  const { connect } = props;
  const classes = useStyles();

  return (
    <div className={classes.connected}>
      <Typography variant="body1" paragraph>
        Вы не подключены
      </Typography>
      <Button
        className={classes.button}
        variant="outlined"
        size="small"
        onClick={connect}
      >
        Подключиться
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    connected: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {},
  })
);
