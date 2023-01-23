import './ListCourses.css';

import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { fetchCourses, getCoursesError, getCoursesStatus, selectAllCourses } from '../../../store/coursesSlice';
import Card from '../../cardCourse/CardCourse';
import Loading from '../../static/loading/Loading';

function Courses() {
  const token = useAppSelector((state) => state.token.value);

  const dispatch = useAppDispatch();
  const courses = useAppSelector(selectAllCourses);
  const status = useAppSelector(getCoursesStatus);
  const error = useAppSelector(getCoursesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses(token));
    }
  }, [status, dispatch]);

  let content;
  if(status === 'loading') {
    content = <Loading />
  } else if(status === 'succeeded') {
    content = courses.map((course) => (
      <Card
        key={course.id}
        id={course.id}
        title={course.title}
        description={course.description}
        price={course.price}
      />
    ))
  } else if(status === 'failed') {
    content = <div>{error}</div>
  }


  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ marginBottom: '50px' }}
    >
      <Grid item container xs={12} sx={{ marginX: 5, justifyContent: 'center' }}>
        <Typography variant='h2' className='title-poppins'>Cursos</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent='center' marginX={5}>
        {content}
      </Grid>
    </Grid>
  )
}

export default Courses;
