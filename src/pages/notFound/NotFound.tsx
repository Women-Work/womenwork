import './NotFound.css';

import { Button } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import Image from 'mui-image';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function handleVoltar(): void {
    navigate(-1);
  }

  return (
    <>
      <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ mt: 0, mb: 0 }} >
        <Grid item xs={12}>
          <Typography className='not title-poppins' sx={{ fontSize: { xs: 'h5.fontSize', md: 'h2.fontSize' } }}>404: Página não encontrada</Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'block' } }}>
          <Image
            style={{ width: '70%', height: 'auto', padding: 0 }}
            src='/assets/images/notFound.svg'
            duration={300}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: { xs: 1, md: 1 }, mb: { xs: -50 } }}>
          <Button
            variant='contained'
            size='large'
            color='primary'
            onClick={() => handleVoltar()}
          >
            Voltar
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default NotFound
