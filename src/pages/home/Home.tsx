import { Button, Grid, Link as MuiLink, Typography } from '@mui/material';
import Image from 'material-ui-image';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

import { styles } from './styles';

export default function Home() {
  const classes = styles();

  return (
    <Grid container>
      <Grid item xs={12} container justifyContent='center' paddingY={5}>
        <Grid item xs={4}>
          <Typography variant='h1' className={classes.title} sx={{ fontWeight: 'bold' }}>Delas</Typography>
          <Typography variant='h1' className={classes.title} sx={{ fontWeight: 'bold' }}>para elas.</Typography>
          <Typography variant='body1' sx={{ marginTop: 2, marginBottom: 5 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At cum quasi obcaecati, doloribus dolores expedita unde.</Typography>

          <MuiLink href='#recursos' underline='none'>
              <Button variant='text' color='secondary' size='large' sx={{ marginRight: 2}}>
                  Saber mais <KeyboardArrowRightRoundedIcon />
              </Button>
          </MuiLink>
        
        </Grid>
        <Grid item xs={6}>
          <Image src='assets/images/home.svg' alt='' />
        </Grid>
      </Grid>
      {/* <Grid item xs={12} container justifyContent='center' paddingY={5} id='recursos'>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h2'>Recursos</Typography>
        </Grid>
        <Grid item xs={3}>
          <WorkRoundedIcon /> Aulas de profissionais
          
        </Grid>
        <Grid item xs={3}>
          <HandymanRoundedIcon /> Atividades mão na massa
        </Grid>
        <Grid item xs={3}>
          <BarChartRoundedIcon /> Conteúdo relevante para o mercado
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subtitle1'>Lorem ipsum</Typography>
        </Grid>
      </Grid> */}
    </Grid>
  )
}
