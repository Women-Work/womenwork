import './NotFound.css';

import { Button, Grid, Typography } from '@mui/material';
import Image from 'mui-image';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada — WomenWork';
  }, []);
  
  const navigate = useNavigate();
  
  function handleVoltar(): void {
    navigate(-1);
  }

  return (
    <>
      <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h2' className='not title-poppins'>404: Página não encontrada</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            style={{ width: '80%', height: 'auto', padding: 0 }}
            src='/assets/images/notFound.svg'
            duration={300}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
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
