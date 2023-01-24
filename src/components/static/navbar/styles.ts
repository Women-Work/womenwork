import { alpha, createStyles, makeStyles, Theme } from "@material-ui/core";

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
    },

  },

  centerImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },


  navbutton: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 2,
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
  }
}));

export { styles };
