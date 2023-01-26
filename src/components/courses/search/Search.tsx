import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../common/hooks';
import Course from '../../../models/Course';
import { search } from '../../../services/Service';
import { selectToken } from '../../../redux/tokenSlice';
import CardCourse from '../../cardCourse/CardCourse';
import Loading from '../../static/loading/Loading';

export default function Search() {
  const token = useAppSelector(selectToken);
  const [searchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const query = searchParams.get('q');

  const getSearchedCourses = async () => {
    await search(`/products/title/${query}`, setCourses, token)
      .then(() => {
        setIsLoading(false);
    });
  }

  useEffect(() => {
    getSearchedCourses();
  }, [query]);


  return (
    <>
      <Grid container justifyContent='center' alignItems='flex-start'>
        <Grid item container xs={12} sx={{ marginX: 5 }}>
          <Typography variant='h4' className='title-poppins'>Resultados para: <span style={{ color: '#E1A6A0' }}>{query}</span></Typography>
        </Grid>
        {
          isLoading ?
            <Loading />
            :
            courses.length > 0 ?
              courses.map((course) => (
                <CardCourse
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  price={course.price}
                />
              ))
              :
              <Box marginTop={5}>
                <Typography variant='h4' className='title-poppins'>Nenhum resultado encontrado</Typography>
              </Box>

        }
      </Grid>
    </>
  )
}
