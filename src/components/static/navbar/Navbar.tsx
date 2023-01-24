import './Navbar.css';
import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import logofooter from '../../../assets/logo-footer.png';
import SDrawer from '../drawer/Drawer';


function Navbar() {
  const classes = styles();
  let navigate = useNavigate();
  const [search, setSearch] = useState('');

  function logoutHandle() {
    localStorage.removeItem('token');
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

  return (

    <Box sx={{ flexGrow: 1, height: '80px' }}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item xs={4} alignItems='center' display='flex'>
              <SDrawer />
              <Link to="/">
                <Button color={handlePathColor('/home')}><img src={logo} alt='logo' height='40px' /></Button>
              </Link>
              <Box padding='10px' sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                <img src={logofooter} alt='logo-footer' width='40%' />
              </Box>
              <Box padding='5px' sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
                <img src={logofooter} alt='logo-footer' width='150px' />
              </Box>
            </Grid>
            <Grid item xs={4} className={classes.centerImg}>
              <Link to="/" color="primary">
                <Button className={classes.navbutton} color={handlePathColor('/home')}>home</Button>
              </Link>

              <Link to="/courses" >
                <Button className={classes.navbutton} color={handlePathColor('/courses')}>cursos</Button>
              </Link>

              <Link to="/about">
                <Button className={classes.navbutton} color={handlePathColor('/about')}>sobre</Button>
              </Link>
            </Grid>
            <Grid item xs={4} container className={classes.navbutton} justifyContent='flex-end' alignItems='center'>

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

              <></>

              <Grid item xs={2} className={classes.navbutton} >
                {
                  localStorage.getItem('token') ?
                    <Button color="inherit" onClick={logoutHandle}>
                      LOGOUT
                    </Button>
                    :
                    <Link to="/login">
                      <Button color={handlePathColor('/login')}>
                        LOGIN </Button>
                    </Link>
                }
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar