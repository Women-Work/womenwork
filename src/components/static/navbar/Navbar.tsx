import "./Navbar.css";

import { AppBar, Button, InputBase, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { LogoutRounded, VideoLibraryRounded } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Grid,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { bindMenu, bindTrigger } from "material-ui-popup-state";
import { usePopupState } from "material-ui-popup-state/hooks";
import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logofooter from "../../../assets/logo-footer.png";
import logo from "../../../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { resetToken, selectToken } from "../../../redux/tokenSlice";
import { logout, selectUser } from "../../../redux/userSlice";
import SDrawer from "../drawer/Drawer";
import { styles } from "./styles";
import { s3Config } from "../../../common/utils";

function Navbar() {
  const classes = styles();
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const url = s3Config.s3Url;

  function logoutHandle() {
    dispatch(resetToken());
    dispatch(logout());
    navigate("/login");
  }

  function handlePathColor(path: string) {
    return window.location.pathname === path ? "secondary" : "inherit";
  }

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (search) {
      navigate(`/search?q=${search}`);
    }
  }

  let userMenu: JSX.Element | JSX.Element[];
  const popupState = usePopupState({
    variant: "popover",
    popupId: "menu-user",
  });
  if (token && token.length > 0) {
    userMenu = [
      <MenuItem key={1} sx={{ cursor: "default" }}>
        <Avatar src={user.photo === "default.jpg" ? "" : url + user.photo} />
        <div style={{ overflow: "hidden", textOverflow: "" }}>
          {user.name} <br />
          <Typography variant="subtitle2" noWrap sx={{ color: "#707070" }}>
            {user.user}
          </Typography>
        </div>
      </MenuItem>,
      <Divider key={2} />,
      <Link to="/user/courses" key={3}>
        <MenuItem sx={{ width: "100%" }} onClick={popupState.close}>
          <ListItemIcon>
            <VideoLibraryRounded />
            Meus cursos
          </ListItemIcon>
        </MenuItem>
      </Link>,
      <MenuItem
        key={4}
        onClick={() => {
          logoutHandle();
          popupState.close();
        }}
      >
        <ListItemIcon>
          <LogoutRounded /> Sair
        </ListItemIcon>
      </MenuItem>,
    ];
  } else {
    userMenu = (
      <Link to="/login">
        <MenuItem onClick={popupState.close}>
          <Avatar /> Entrar
        </MenuItem>
      </Link>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, height: "80px" }}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            sx={{
              justifyContent: {
                xs: "space-evenly",
                sm: "space-between",
              },
              spacing: {
                xs: 0,
                sm: 1,
              },
            }}
          >
            <Grid
              item
              sm={3}
              md={4}
              alignItems="center"
              display="flex"
              sx={{
                flexDirection: {
                  md: "row-reverse",
                },
              }}
            >
              <Grid item sm={4} display="flex">
                <SDrawer />
              </Grid>
              <Grid item sm={3} md={12} alignItems="center" display="flex">
                <Link to="/">
                  <Button>
                    <img
                      style={{ height: "40px", padding: 0 }}
                      src={logo}
                      alt=""
                    />
                  </Button>
                </Link>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <img src={logofooter} alt="logo-footer" width="180px" />
                </Box>
              </Grid>
            </Grid>

            <Grid item sm={4} md={3} className={classes.centerImg}>
              <Link to="/" color="primary" className="navLink">
                <Button
                  className={classes.navbutton}
                  color={handlePathColor("/home")}
                >
                  home
                </Button>
              </Link>

              <Link to="/courses" className="navLink">
                <Button
                  className={classes.navbutton}
                  color={handlePathColor("/courses")}
                >
                  cursos
                </Button>
              </Link>

              <Link to="/about" className="navLink">
                <Button
                  className={classes.navbutton}
                  color={handlePathColor("/about")}
                >
                  sobre
                </Button>
              </Link>
            </Grid>

            <Grid
              item
              xs={8}
              sm={3}
              md={4}
              container
              className={classes.buttons}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                md={6}
                className={classes.search}
                style={{ padding: 0, minWidth: 0, marginRight: 10 }}
              >
                <SearchIcon className={classes.searchIcon} />
                <form onSubmit={onSubmit}>
                  <InputBase
                    placeholder="Buscar cursos"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                    inputProps={{ "aria-label": "search" }}
                  />
                </form>
              </Grid>

              <Grid
                item
                md={2}
                justifyContent="end"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Avatar
                  {...bindTrigger(popupState)}
                  alt={user.name}
                  src={user.photo === "default.jpg" ? "" : url + user.photo}
                  sx={{ cursor: "pointer" }}
                />
                <Menu
                  {...bindMenu(popupState)}
                  id="menu-user"
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      width: "16rem",
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        "&:after": {
                          color: "red",
                        },
                      },
                      "& .MuiListItemIcon-root": {
                        svg: {
                          mr: 1,
                        },
                        color: "#707070",
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                      "&:firstChild": {
                        cursor: "default",
                      },
                      a: {
                        textTransform: "capitalize",
                        textDecoration: "none",
                        color: "#404040",
                      },
                    },
                  }}
                  autoFocus={false}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  {userMenu}
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
