import { createStyles, makeStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) => createStyles({
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 700,
    "@media (max-width:1077px)": {
      fontSize: "5rem",
    },
    "@media (max-width:921px)": {
      fontSize: "4rem",
    },
  },
  text: {
    marginTop: "2rem",
  },
}));

export { styles };