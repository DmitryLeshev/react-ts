import React, { useEffect, useRef, useState } from "react";

import {
  createStyles,
  Divider,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { ITheme } from "../../types/Theme";
import { useArray, useInput } from "../../hooks";
import { NotConnected } from "./components";
import Message from "./components/Message";

export enum Events {
  CONNECTION = "connection",
  MESSAGE = "message",
}

export default () => {
  const classes = useStyles();
  const [connected, setConnected] = useState(false);
  const [username, _setUsername] = useState("Dima");
  const messages = useArray({ initialArray: [] });
  const { clear: messageClear, ...message } = useInput({ initialValue: "" });

  const socket = useRef<any>(null);

  useEffect(() => {
    console.log("[chat] mount");
    return () => {
      console.log("[chat] unmount");
    };
  }, []);

  function connect() {
    socket.current = new WebSocket("ws://localhost:4000");

    socket.current.onopen = () => {
      setConnected(true);
      const message = {
        event: Events.CONNECTION,
        username,
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
      console.log("[socket] подключился");
    };

    socket.current.onmessage = (event: any) => {
      const message = JSON.parse(event.data);
      messages.addFirst(message);
    };

    socket.current.onclose = () => {
      console.log("[socket] закрыт");
    };

    socket.current.onerror = () => {
      console.log("[socket] произошла ошибка");
    };
  }

  async function sendMessage() {
    const msg = {
      event: Events.MESSAGE,
      id: Date.now(),
      username,
      message: message.value,
    };
    socket.current.send(JSON.stringify(msg));
    messageClear();
  }

  return (
    <div className={classes.chat}>
      <div className={classes.messages}>
        {connected ? (
          messages.array.map((message: any) => (
            <Message key={message.id} message={message} />
          ))
        ) : (
          <NotConnected connect={connect} />
        )}
      </div>
      <Paper square className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Написать сообщение..."
          multiline
          {...message}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          onClick={sendMessage}
        >
          <SendIcon color="secondary" />
        </IconButton>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    chat: {
      position: "absolute",
      bottom: 0,
      right: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      width: 300,
      height: 400,
      backgroundColor: theme.palette.background.default,
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    messages: {
      display: "flex",
      flexDirection: "column-reverse",
      flexGrow: 1,
      overflow: "auto",
      backgroundColor: theme.palette.background.default,
      "&::-webkit-scrollbar": { width: 0 },
    },
    message: {
      position: "relative",
      display: "flex",
      padding: theme.spacing(1),
      margin: theme.spacing(1, 1),
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 16,
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
    connected: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    connectedButton: {},
  })
);
