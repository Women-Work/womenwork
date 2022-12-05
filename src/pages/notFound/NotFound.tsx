import { Grid } from '@material-ui/core';
import React from 'react';
import './NotFound.css'

function NotFound() {
  return (
    <>
      <Grid container direction='row' alignItems='center'>
        <Grid item xs={6} sm={12} className='grid-1'>
          <img className='imgNot' src="assets/images/WomenWork_not.svg" alt="" />
        </Grid>
        <Grid item xs={6} sm={12}>
          <h1 className='not'>404: Página não encontrada</h1>
        </Grid>
      </Grid>
    </>
  )
}

export default NotFound
