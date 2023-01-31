import { Box, Grid as MGrid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Grid from '../../../common/Grid';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import Course from '../../../models/Course';
import { fetchCourses, getCoursesError, getCoursesStatus, selectAllCourses } from '../../../redux/coursesSlice';
import { selectToken } from '../../../redux/tokenSlice';
import CardCourse from '../../cardCourse/CardCourse';
import Loading from '../../static/loading/Loading';

export default function Search() {
  useEffect(() => {
    document.title = `Pesquisa: ${query} — WomenWork`;
  }, []);
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const courses = useAppSelector(selectAllCourses);
  const status = useAppSelector(getCoursesStatus);
  const error = useAppSelector(getCoursesError);

  const [searchedCourses, setSearchedCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  const getSearchedCourses = () => {
    setSearchedCourses(
      courses.filter((course: Course) => 
        course.title.toLowerCase().includes(query?.toLowerCase() as string)
      ));
  }

  useEffect(() => {
    getSearchedCourses();
  }, [courses, query]);

  let content;
  let title = (
    <Typography variant='h3' className='title-poppins'>Resultados para: <span style={{ color: '#E1A6A0' }}>{query}</span></Typography>
  );
  if(status === 'loading') {
    content = <Loading />
  } else if(status === 'succeeded') {
    if(searchedCourses.length > 0) {
      content = searchedCourses.map((course) => (
        <CardCourse
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description}
          price={course.price}
        />
      ));
    } else {
      content = 
      <Box marginTop={5}>
        <Typography variant='h4' className='title-poppins'>Nenhum resultado encontrado</Typography>
      </Box>
    }
  }

  return (
    <>
      <MGrid container justifyContent='center' alignItems='flex-start'>
        <Grid
          title={title}
          item
          container
          xs={12}
          sx={{ marginX: 5 }}
        >
          {content}
          
        </Grid>
      </MGrid>
    </>
  )
}
