import React from "react";

import {
  Avatar,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ITheme } from "../../../types/Theme";
import { Events } from "../Chat";

interface Props {
  message: any;
}

export default (props: Props) => {
  const { message } = props;
  const classes = useStyles();

  const UserAvatar = ({ base64, alt, className }: any) => (
    <Avatar>
      <img
        className={className}
        src={`data:image/jpeg;base64, ${base64}`}
        alt={alt || "avatar"}
      />
    </Avatar>
  );

  const avatarProps = {
    base64: "base64",
    className: classes.avatar,
    alt: "alt",
  };

  if (message.event === Events.CONNECTION) {
    return (
      <div className={classes.message}>
        <Typography variant="caption" className={classes.messageText}>
          Пользователь {message.username} подключился
          <span className={classes.time}>11:32</span>
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.message}>
      <UserAvatar {...avatarProps} />
      <div className={classes.messageWrapper}>
        <Typography variant="caption" className={classes.messageText}>
          {message.username} {"12:30"}
        </Typography>
        <Typography variant="caption" className={classes.messageText}>
          {message.message}
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    message: {
      position: "relative",
      display: "flex",
      padding: theme.spacing(1),
      margin: theme.spacing(1, 1),
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
    },
    avatar: {},
    messageText: {
      wordBreak: "break-all",
      marginLeft: theme.spacing(2),
    },
    time: {
      position: "absolute",
      bottom: 0,
      right: theme.spacing(2),
    },
    messageWrapper: {
      display: "flex",
      flexDirection: "column",
    },
  })
);
