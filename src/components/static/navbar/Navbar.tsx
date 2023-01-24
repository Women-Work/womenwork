import './Navbar.css';

import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logofooter from '../../../assets/logo-footer.png';
import logo from '../../../assets/logo.png';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { resetToken, selectToken } from '../../../store/tokenSlice';
import { styles } from './styles';
import { logout } from '../../../store/userSlice';


function Navbar() {
  const classes = styles();
  let navigate = useNavigate();
  const [search, setSearch] = useState('');
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const privateRoutes = ['add', 'delete'];

  useEffect(() => {
    const path = window.location.pathname.split('/')[2];
    if(token === '' && privateRoutes.includes(path)) {
      toast.error("Você precisa estar logada para acessar essa página.");
      navigate("/login");
    }else if(token !== '' && ['login', 'register'].includes(path)) {
      navigate("/home");
    }
  }, [token]);

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
            <Link to="/" color="primary">
                <Button color={handlePathColor('/home')}>home</Button>
              </Link>

              <Link to="/courses">
                <Button color={handlePathColor('/courses')}>cursos</Button>
              </Link>

              <Link to="/about">
                <Button color={handlePathColor('/about')}>sobre</Button>
              </Link>

              <Link to="/user">
                <Button color={handlePathColor('/user')}>perfil</Button>
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

              <Grid item xs={2}>
                {
                  token && token.length > 0 ?
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