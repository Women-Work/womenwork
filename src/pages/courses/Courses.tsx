import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../../components/card/Card';

function Courses() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="Título" text="laalalalaala" price={0} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="Título" text="laalalalaala" price={0} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="Título" text="laalalalaala" price={0} />
        </Grid>
      </Grid>
    </>
  )
}

export default Courses
