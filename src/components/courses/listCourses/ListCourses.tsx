import './ListCourses.css';

import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { fetchCourses, getCoursesError, getCoursesStatus, selectAllCourses } from '../../../redux/coursesSlice';
import { selectToken } from '../../../redux/tokenSlice';
import Card from '../../cardCourse/CardCourse';
import Loading from '../../static/loading/Loading';
import Grid from '../../../common/Grid';
import { JsxEmit } from 'typescript';

function Courses() {
  const token: string = useAppSelector(selectToken);

  const dispatch = useAppDispatch();
  const courses = useAppSelector(selectAllCourses);
  const status = useAppSelector(getCoursesStatus);
  const error = useAppSelector(getCoursesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  let content;
  if(status === 'loading') {
    content = <Loading />;
  } else if(status === 'succeeded') {
    if(courses.length > 0) {
      content = courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description}
          price={course.price}
        />
      ))
    } else {
      content =
      <Box marginTop={5}>
        <Typography variant='h4' className='title-poppins'>Nenhum resultado encontrado</Typography>
      </Box>
    }
  } else if(status === 'failed') {
    content = <div>{error}</div>
  }

  let title = (
    <Typography variant='h4' className='title-poppins'>Cursos</Typography>
  );

  return (
    <Grid title={title}>
      {content}
    </Grid>
  )
}

export default Courses;
