import { Button, Card, CardContent, CardHeader, Grid, Link as MuiLink, Typography } from '@mui/material';
import Image from 'material-ui-image';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

import { styles } from './styles';

const features =  [
   {
    avatar: <WorkRoundedIcon />,
    title: 'Aulas com profissionais',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    bgColor: '#917395',
  },
  {
    avatar: <HandymanRoundedIcon />,
    title: 'Atividades mão na massa',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    bgColor: '#AD7C9E',
  },
  {
    avatar: <BarChartRoundedIcon />,
    title: 'Conteúdo atualizado',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    bgColor: '#C884A6',
  },
  {
    avatar: <SupportAgentRoundedIcon />,
    title: 'Suporte 24h',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    bgColor: '#D9ABC2',
  },
]

export default function Home() {
  const classes = styles();

  return (
    <Grid container justifyContent='center' alignContent='center'>
      <Grid item xs={12} container justifyContent='center' paddingY={2} >
        <Grid item xs={5}>
          <Typography variant='h1' className={classes.title} sx={{ fontFamily: 'Poppins' }}>Delas</Typography>
          <Typography variant='h1' className={classes.title} sx={{ fontFamily: 'Poppins' }}>para elas.</Typography>
          <Typography variant='body1' sx={{ marginTop: 2, marginBottom: 5, color: '#252525' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At cum quasi obcaecati, doloribus dolores expedita unde.</Typography>

          <MuiLink href='#recursos' underline='none'>
              <Button variant='text' color='secondary' size='large' sx={{ marginRight: 2, color: '#766B8D'}}>
                  Saber mais <KeyboardArrowRightRoundedIcon />
              </Button>
          </MuiLink>
        
        </Grid>
        <Grid item xs={6}>
          <Image src='assets/images/home.svg' alt='' />
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent='center' id='recursos' sx={{ marginBottom: 10, marginX: 5 }}>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h2'>Recursos</Typography>
        </Grid>
        {
          features.map((feature) => (
            <Grid key={feature.title} item xs={12} sm={6} md={3}>
              <Card
              sx={{ marginX: 2, marginY: 3 }}
              >
                <CardHeader
                  sx={{ background: feature.bgColor, color: 'white' }}
                  avatar={feature.avatar}
                  title={feature.title}
                />

                <CardContent>
                  <Typography variant='body2' sx={{ padding: 1, textAlign: 'justify', color: '#252525' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )
}
