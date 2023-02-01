import { AccountCircle, LogoutRounded, VideoLibraryRounded } from "@mui/icons-material";
import "./Drawer.css";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Typography, } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { resetToken, selectToken } from "../../../redux/tokenSlice";
import { logout, selectUser } from "../../../redux/userSlice";
import { usePopupState } from "material-ui-popup-state/hooks";
import { s3Config } from "../../../common/utils";
import logo from "../../../assets/ww-logo.png";


export default function SDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const token = useAppSelector(selectToken);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const url = s3Config.s3Url;
  const userPhoto = ["default.jpg", "", undefined].includes(user.photo) ? "" : url + user.photo;

  function logoutHandle() {
    dispatch(resetToken());
    dispatch(logout());
    navigate("/login");

  }

  let userMenu: JSX.Element | JSX.Element[];
  const popupState = usePopupState({
    variant: "popover",
    popupId: "menu-user",
  });
  if (token && token.length > 0) {
    userMenu = [
      <MenuItem key={1} sx={{ cursor: "default" }}>
        <Avatar src={userPhoto} />
        <div style={{ overflow: "hidden", textOverflow: "" }}>
          {user.name} <br />
          <Typography variant="subtitle2" noWrap sx={{ color: "#707070" }}>
            {user.user}
          </Typography>
        </div>
      </MenuItem>,
      <Divider key={2} />,
      <Link to="/user" key={3}>

      </Link>,
      <Link to="/user/courses" key={3}>

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
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ display: { xs: "block", md: "none" }, mx: 1, px: 0 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} textAlign="center" role="presentation">
          <Typography>

            <img width="250px" src={logo} alt="logo do Drawer" />

          </Typography>
        </Box>

        <List>
          {(token != '') &&
            <>

              <ListItemIcon>
                <ListItem>
                  <Avatar src={userPhoto} />
                  <div style={{ overflow: "hidden", textOverflow: "", padding: "10px" }}>
                    {user.name} <br />
                    <Typography variant="subtitle2" noWrap sx={{ color: "#707070" }}>
                      {user.user}
                    </Typography>
                  </div>
                </ListItem>
              </ListItemIcon>


              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem component={Link} to="/user">
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary="Perfil" className="list-item" />
                </ListItem>
              </ListItemButton>


              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem component={Link} to="/user/courses">
                  <ListItemIcon>
                    <VideoLibraryRounded />
                  </ListItemIcon>
                  <ListItemText primary="Meus cursos" className="list-item" />
                </ListItem>
              </ListItemButton>

              <Divider />
            </>
          }

          <ListItemButton onClick={() => setIsDrawerOpen(false)}>
            <ListItem component={Link} to="/">
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" className='list-item' />
            </ListItem>
          </ListItemButton>

          <ListItemButton onClick={() => setIsDrawerOpen(false)}>
            <ListItem component={Link} to="/courses">
              <ListItemIcon>
                <MenuBookRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Cursos" className="list-item" />
            </ListItem>
          </ListItemButton>

          <ListItemButton onClick={() => setIsDrawerOpen(false)}>
            <ListItem component={Link} to="/about">
              <ListItemIcon>
                <InfoRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre" className="list-item" />
            </ListItem>
          </ListItemButton>
        </List>

        <List>

          {(token == '') ?

            <>

              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem component={Link} to="/signup">
                  <ListItemIcon>
                    <PersonAddAltRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadastro" className="list-item" />
                </ListItem>
              </ListItemButton>

              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem component={Link} to="/login">
                  <ListItemIcon>
                    <LoginRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" className="list-item" />
                </ListItem>
              </ListItemButton>
            </>

            :
            <>
              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem onClick={() => { logoutHandle(); }}>
                  <ListItemIcon>
                    <LogoutRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" className="list-item" />
                </ListItem>
              </ListItemButton>
            </>
          }
        </List>
      </Drawer>
    </>
  );
}