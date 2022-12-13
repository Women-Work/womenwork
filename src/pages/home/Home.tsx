import { Grid, Typography } from '@mui/material';
import Image from 'material-ui-image';
import React from 'react';

import { styles } from './styles';

export default function Home() {
  const classes = styles();

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={4}>
        <Typography variant='h1' className={classes.title}>Delas</Typography>
        <Typography variant='h1' className={classes.title}>para elas.</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, dicta distinctio. A, quidem adipisci. Voluptates nostrum cum amet dolore delectus eligendi vero animi? Dolore ratione sed dolores dignissimos inventore sapiente?</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image src='assets/images/home.svg' alt='' />
      </Grid>
    </Grid>
  )
}
