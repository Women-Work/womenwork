import { Box, Typography } from '@mui/material';
import React from 'react';

import Grid from '../../../common/Grid';
import { useAppSelector } from '../../../common/hooks';
import { selectUser } from '../../../redux/userSlice';
import Card from '../../cardCourse/CardCourse';


function MyCourses() {
  const user = useAppSelector(selectUser);
  const userCouses = user.product;

  let content;
  if (userCouses && userCouses.length > 0) {
    content = userCouses.map((course) => (
      <Card
        key={course.id}
        id={course.id}
        title={course.title}
        description={course.description}
        price={course.price}
      />
    ))
  } else {
    content = (
    <Box marginTop={5}>
      <Typography variant='h4' className='title-poppins'>Você ainda não comprou nenhum curso</Typography>
    </Box> )
  }

  return (
    <Grid title='Meus cursos'>
      {content}
    </Grid>
  )
}

export default MyCourses