import { Grid } from '@material-ui/core';
import React from 'react';
import './NotFound.css';
import Image from 'mui-image';
import { Typography } from '@mui/material';
import Footer from '../../components/static/footer/Footer';

function NotFound() {
  return (
    <>
      <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h2' className='not title-poppins'>404: Página não encontrada</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            style={{ width: '100%', height: 'auto', padding: 0, marginRight: 'auto', borderRadius: '5px' }}
            src='assets/images/notFound.svg'
            duration={300}
            alt=""
          />
        </Grid>
      </Grid>
    </>
  )
}

export default NotFound
