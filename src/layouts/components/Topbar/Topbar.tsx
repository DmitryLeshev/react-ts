import React, { useState } from "react";

import {
  Avatar,
  createStyles,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { ITheme } from "../../../types/Theme";

import Fish from "../../../static/icons/Fish";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import clsx from "clsx";
import { AccountCircle } from "@material-ui/icons";

interface Props {}

export default function Topbar(props: Props) {
  const classes = useStyles();

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Fish className={classes.logo__image} />
        <p className={classes.logo__title}>logo__title</p>
        <p className={classes.logo__tagline}>logo__tagline</p>
      </div>
      <div
        className={classes.user}
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
      >
        Dima
        <AccountCircle />
      </div>
      {renderMenu}
      {/* <div
        className={classes.user}
        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
      >
        <p className={classes.user__login}>L.D.K</p>
        <Avatar className={classes.user__avatar}></Avatar>
        <ArrowDropDownIcon /> */}
      {/* <div
          className={clsx(classes.user__dropdown, {
            [classes.dropdown_isOpen]: dropdownIsOpen,
          })}
        >
          <List disablePadding>
            <ListItem disableGutters>
              <ListItemAvatar>
                <Avatar></Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Dima Leshchev"} secondary={""} />
            </ListItem>
            <Divider />
          </List>
        </div> */}
      {/* </div> */}
    </header>
  );
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    header: {
      display: "flex",
      width: "100%",
      background: theme.palette.primary.dark,
      height: theme.header.height,
    },
    logo: {
      display: "grid",
      gridTemplateColumns: "min-content 1fr",
      columnGap: 8,
      padding: theme.spacing(1, 3),
    },
    logo__image: { width: 50, height: 50, gridRow: "span 2" },
    logo__title: { margin: 0 },
    logo__tagline: { margin: 0 },
    user: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      padding: theme.spacing(1, 3),
      cursor: "pointer",

      transition: `all 0.3s ${theme.transitions.easing.sharp}`,

      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    user__avatar: {
      width: 32,
      height: 32,
    },
    user__login: { margin: 0, marginRight: theme.spacing(1) },
    user__dropdown: {
      visibility: "hidden",
      position: "absolute",
      zIndex: 1000,
      right: 0,
      minWidth: "206px",
      maxWidth: "230px",
      width: "auto",

      padding: theme.spacing(1),

      transform: "translateY(100%)",

      opacity: 0,
      background: theme.palette.background.paper,
      pointerEvents: "none",
      transition:
        "opacity 100ms linear,top 100ms linear,visibility 100ms linear",
    },
    dropdown_isOpen: {
      visibility: "visible",
      opacity: 1,
    },
  })
);
