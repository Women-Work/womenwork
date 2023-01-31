import { VideoLibraryRounded } from "@mui/icons-material";
import "./Drawer.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { resetToken, selectToken } from "../../../redux/tokenSlice";
import { logout } from "../../../redux/userSlice";

export default function SDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const token = useAppSelector(selectToken);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  function logoutHandle() {
    dispatch(resetToken());
    dispatch(logout());
    navigate("/login");
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
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography>
            <img className="logo-img" src="assets/images/ww-logo.png" alt="" />
          </Typography>
        </Box>

        <List>

          <ListItemButton onClick={() => setIsDrawerOpen(false)}>
            <ListItem component={Link} to="/">
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" className='list-item' />
            </ListItem>
          </ListItemButton>

          <ListItemButton onClick={() => setIsDrawerOpen(false)}>
            <ListItem component={Link} to="/courses">
              <ListItemIcon>
                <MenuBookOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Cursos" className="list-item" />
            </ListItem>
          </ListItemButton>

          <ListItemButton onClick={() => setIsDrawerOpen(false)}>
            <ListItem component={Link} to="/about">
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre" className="list-item" />
            </ListItem>
          </ListItemButton>
        </List>

        <Divider />

        <List>

          {(token == '') ?

            <>

              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem component={Link} to="/signup">
                  <ListItemIcon>
                    <AddCircleOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadastro" className="list-item" />
                </ListItem>

              </ListItemButton>
              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem component={Link} to="/login">
                  <ListItemIcon>
                    <LoginOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" className="list-item" />
                </ListItem>
              </ListItemButton>
            </>

            :

            <>
              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem component={Link} to="/user/courses">
                  <ListItemIcon>
                    <VideoLibraryRounded />
                  </ListItemIcon>
                  <ListItemText primary="Meus cursos" className="list-item" />
                </ListItem>
              </ListItemButton>

              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItem onClick={() => { logoutHandle(); }}>
                  <ListItemIcon>
                    <LogoutOutlinedIcon />
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


