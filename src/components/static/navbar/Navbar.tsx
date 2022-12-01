import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha, makeStyles, styled } from '@material-ui/core/styles';
import { AppBar, Button, createStyles, IconButton, InputBase, Theme, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Link } from 'react-router-dom';
import './Navbar.css';

const styles = makeStyles((theme: Theme) => createStyles({
  navbar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: '1rem',
    position: 'absolute'
  },
  cartIcon: {
    cursor: 'pointer',
    color: theme.palette.primary.contrastText
  },
  buttons: {
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar() {
  const classes = styles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.navbar}>
        <Toolbar>
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

          <Typography>
            <Link to="/login">
              <Button color="inherit">login</Button> 
            </Link>

            <IconButton >
              <ShoppingCartRoundedIcon className={classes.cartIcon} />
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
