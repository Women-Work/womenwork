import './ListCourses.css';

import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useAppSelector } from '../../../common/hooks';
import Course from '../../../models/Course';
import { search } from '../../../services/Service';
import Card from '../../cardCourse/CardCourse';
import Loading from '../../static/loading/Loading';

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useAppSelector((state) => state.token.value);

  async function getCourse() {
    await search("/products", setCourses, token)
      .then(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getCourse();
  }, [courses.length]);

  return (
    <>
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
          {
            isLoading ?
            <Loading />
            :
            courses.map((course) => (
              <Grid key={course.id} item xs={10} md={5} lg={3}>
                <Card
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  price={course.price}
                />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}

export default Courses;
