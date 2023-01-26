import { Grid as MGrid, GridProps as MGridProps } from '@mui/material';
import React from 'react';

interface GridProps extends MGridProps {
  title: any;
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
        {title}
      </MGrid>
      <MGrid item xs={12} container justifyContent='center' marginX={5}>
        {children}
      </MGrid>
    </MGrid>
  )
}

export default Grid