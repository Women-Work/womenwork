import './Navbar.css';

import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { styles } from './styles';


function Navbar() {
  const classes = styles();
  let navigate = useNavigate();
  const [search, setSearch] = useState('');

  function logoutHandle() {
    if (window.confirm('Deseja sair?')) {
      localStorage.removeItem('token');
      navigate("/login");
    }
  }

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if(search) {
      navigate(`/search?q=${search}`);
    }
  }

  return (

    <Box sx={{ flexGrow: 1, height: '80px' }}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item xs={4}>
              <Link to="/" color="primary">
                <Button color="inherit">home</Button>
              </Link>

              <Link to="/courses">
                <Button color="inherit">cursos</Button>
              </Link>

              <Link to="/about">
                <Button color="inherit">sobre</Button>
              </Link>
            </Grid>
            <Grid item xs={4} className={classes.centerImg}>
              <img src='assets/images/logo.png' alt='logo' height='40px' />
            </Grid>
            <Grid item xs={4} container className={classes.buttons2}>
              <Grid item xs={6} textAlign='right'>
                {
                  localStorage.getItem('token') ?
                  <Button color="inherit" onClick={logoutHandle}>Logout</Button>
                  :
                  <Link to="/login">
                    <Button color="inherit">login</Button>
                  </Link>
                }
              </Grid>
              <Grid item xs={6} className={classes.search}>
                <SearchIcon className={classes.searchIcon} />
                <form onSubmit={onSubmit}>
                  <InputBase
                    placeholder="Pesquisar"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </form>
              </Grid>
              
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
        // <Box sx={{ flexGrow: 1, height: '80px' }}>
    //   <AppBar className={classes.navbar}>
    //     <Toolbar>
    //       <Typography>
    //         <SDrawer />
    //       </Typography>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         className={classes.buttons}
    //       >
    //         <Link to="/" color="primary">
    //           <Button color="inherit">home</Button>
    //         </Link>

    //         <Link to="/courses">
    //           <Button color="inherit">cursos</Button>
    //         </Link>

    //         <Link to="/about">
    //           <Button color="inherit">sobre</Button>
    //         </Link>
    //       </Typography>

    //       <Typography className={classes.buttons2}>

    //         {
    //           localStorage.getItem('token') ?

    //             <Button color="inherit" onClick={logoutHandle}>Logout</Button>
    //             :
    //             <Link to="/login">
    //               <Button color="inherit">login</Button>
    //             </Link>
    //         }

    //       </Typography>

    //       <div className={classes.search}>
    //         <div className={classes.searchIcon}>
    //           <SearchIcon />
    //         </div>
    //         <InputBase
    //           placeholder="Pesquisar"
    //           classes={{
    //             root: classes.inputRoot,
    //             input: classes.inputInput,
    //           }}
    //           inputProps={{ 'aria-label': 'search' }}
    //         />
    //       </div>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}

export default Navbar