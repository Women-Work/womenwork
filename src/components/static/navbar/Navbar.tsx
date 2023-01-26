import './Navbar.css';

import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { LogoutRounded, VideoLibraryRounded } from '@mui/icons-material';
import { Avatar, Divider, Grid, ListItemIcon, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import { textTransform } from '@mui/system';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logofooter from '../../../assets/logo-footer.png';
import logo from '../../../assets/logo.png';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { resetToken, selectToken } from '../../../redux/tokenSlice';
import { logout, selectUser } from '../../../redux/userSlice';
import { styles } from './styles';

function Navbar() {
  const classes = styles();
  let navigate = useNavigate();
  const [search, setSearch] = useState('');
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  function logoutHandle() {
    dispatch(resetToken());
    dispatch(logout());
    navigate("/login");
  }

  function handlePathColor(path: string) {
    return window.location.pathname === path ? 'secondary' : 'inherit';
  }

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (search) {
      navigate(`/search?q=${search}`);
    }
  }

  let userMenu: JSX.Element | JSX.Element[];

  if(token && token.length > 0) {
    userMenu = [
        <MenuItem key={1} sx={{ cursor: 'default', color: 'inherit' }}>
          <Avatar 
            src={user.photo}
          />
          <div>
            {user.name} <br />
            <span style={{color: '#707070'}}>{user.user}</span>
          </div> 
        </MenuItem>,
        <Divider key={2} />,
        <MenuItem key={3}>
          <Link to="/user/courses">
            <ListItemIcon>
              <VideoLibraryRounded />Meus cursos
            </ListItemIcon>
          </Link>
        </MenuItem>,
        <MenuItem key={4} onClick={logoutHandle}>
          <ListItemIcon>
            <LogoutRounded /> Sair
          </ListItemIcon>
        </MenuItem>
    ];
  } else {
    userMenu =
    <Link to="/login">
      <MenuItem>
        <Avatar /> Entrar
      </MenuItem>
    </Link>
    ;
  }

  return (

    <Box sx={{ flexGrow: 1, height: '80px' }}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item xs={4} alignItems='center' display='flex'>
            <img src={logo} alt='logo' height='40px'/>
            <Box padding='10px'>
            <img src={logofooter} alt='logo-footer' width='40%'/>
            </Box>
            </Grid>
            <Grid item xs={4} className={classes.centerImg}>
            <Link to="/" color="primary" className="navLink">
                <Button color={handlePathColor('/home')}>home</Button>
              </Link>

              <Link to="/courses" className="navLink">
                <Button color={handlePathColor('/courses')}>cursos</Button>
              </Link>

              <Link to="/about" className="navLink">
                <Button color={handlePathColor('/about')}>sobre</Button>
              </Link>
            </Grid>

            <Grid item xs={4} container className={classes.buttons2} justifyContent='flex-end' alignItems='center'>
              {
                token && token.length > 0 &&
                  <Grid item xs={6} className={classes.search} style={{ padding: 0, minWidth: 0, marginRight: 10 }}>
                    <SearchIcon className={classes.searchIcon} />
                    <form onSubmit={onSubmit}>
                      <InputBase
                        placeholder="Pesquisar cursos"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        onChange={(e) => setSearch(e.target.value)}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </form>
                  </Grid>
              }

              <Grid item xs={2} justifyContent='end'>
                <PopupState variant="popover" popupId="menu-user">
                  {(popupState) => (
                    <React.Fragment>
                      <Avatar
                        {...bindTrigger(popupState)}
                        alt={`${user.name} Souza`}
                        src={user.photo}
                        sx={{ cursor: 'pointer' }}
                      />
                      <Menu
                        {...bindMenu(popupState)}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            width: 220,
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                              '&:after': {
                                color: 'red'
                              }
                            },
                            '& .MuiListItemIcon-root': {
                              svg: {
                                mr: 1
                              },
                              color: '#707070'
                            },
                            '&:before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                            '&:firstChild': {
                              cursor: 'default'
                            },
                            a: {
                              textTransform: 'capitalize',
                              textDecoration: 'none',
                              color: '#404040'
                            },
                          },
                        }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        {userMenu}
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar