import { Grid } from '@mui/material';
import React from 'react';
import './NotFound.css'

function NotFound() {
  return (
    <>
      <Grid container direction='row' alignItems='center'>
        <Grid lg={6} md={12} className='grid-1'>
          <img className='imgNot' src="assets/images/WomenWork_not.svg" alt="" />
        </Grid>
        <Grid lg={6} md={12} display='flex' justifyContent='center'>
          <h1 className='not'>404: Página não encontrada</h1>
        </Grid>
      </Grid>
    </>
  )
}

export default NotFound
