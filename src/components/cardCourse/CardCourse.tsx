import './CardCourse.css';

import { Box } from '@material-ui/core';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Card as MCard, CardContent, Grid, Typography } from '@mui/material';
import Image from 'mui-image';
import React, { useEffect, useState } from 'react';

interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
}

function Card({ id, title, description, price }: Props) {
  
  return (
    <MCard
      sx={{ marginX: 2, marginY: 3 }}
    >
      <CardContent>
        <Image
          style={{ width: '100%', height: 'auto', padding: 0, marginRight: 'auto', borderRadius: '5px' }}
          src={`assets/images/courses/${id}.png`}
          duration={300}
          alt=""
        />

        <Typography variant='h5' className='text-poppins' marginTop={2}>
          {title}
        </Typography>
        
        <Typography variant='body1' color='#353535'>
          {description}
        </Typography>

        <Box className='horizontal-line'></Box>

        <Grid container>
          <Grid item xs={10}>
            <Typography variant='h5' className='text-poppins' marginTop={1}>
              R${price.toString().replace('.', ',')}
            </Typography>
          </Grid>
          <Grid item xs={2} className='cart-btn'>
            <ShoppingCartRoundedIcon />
          </Grid>
        </Grid>
      </CardContent>
    </MCard>
  );
}

export default Card;
