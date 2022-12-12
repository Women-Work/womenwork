import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha, styled } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, InputBase, Theme, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from './styles';
import './Navbar.css';
import SDrawer from '../drawer/Drawer';
import useLocalStorage from 'react-use-localstorage';


function Navbar() {
  const classes = styles();
  let navigate = useNavigate();

  function logoutHandle() {
    if (window.confirm('Deseja sair?')) {
      localStorage.removeItem('token');
      navigate("/login");
    }
  }

  return (
    <Box sx={{ flexGrow: 1, height: '80px' }}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Typography>
            <SDrawer />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={classes.buttons}
          >
            <Link to="/" color="primary">
              <Button color="inherit">home</Button>
            </Link>

            <Link to="/courses">
              <Button color="inherit">cursos</Button>
            </Link>

            <Link to="/about">
              <Button color="inherit">sobre</Button>
            </Link>
          </Typography>

          <Typography className={classes.buttons2}>

            {
              localStorage.getItem('token') ?

                <Button color="inherit" onClick={logoutHandle}>Logout</Button>
                :
                <Link to="/login">
                  <Button color="inherit">login</Button>
                </Link>
            }


            <IconButton >
              <Link to='/cart'>
                <ShoppingCartRoundedIcon className={classes.cartIcon} />
              </Link>
            </IconButton>
          </Typography>


          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar