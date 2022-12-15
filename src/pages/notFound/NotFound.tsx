import { Grid } from '@material-ui/core';
import React from 'react';
import './NotFound.css';
import Image from 'material-ui-image';
import { Typography } from '@mui/material';
import Footer from '../../components/static/footer/Footer';

function NotFound() {
  return (
    <>
      <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h2' className='not'>404: Página não encontrada</Typography>
        </Grid>
        <Grid item xs={12}>
          <img src='assets/images/notFound.svg' alt='' />
        </Grid>
      </Grid>
    </>
  )
}

export default NotFound
