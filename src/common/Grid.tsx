import React from 'react';
import { GridProps as MGridProps, Grid as MGrid, Typography } from '@mui/material';

interface GridProps extends MGridProps {
  title: string;
}

function Grid(props: GridProps) {
  const { children, title } = props;

  return (
    <MGrid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ marginBottom: '50px' }}
    >
      <MGrid item container xs={12} sx={{ marginX: 5, justifyContent: 'center' }}>
        <Typography variant='h2' className='title-poppins'>{title}</Typography>
      </MGrid>
      <MGrid item xs={12} container justifyContent='center' marginX={5}>
        {children}
      </MGrid>
    </MGrid>
  )
}

export default Grid