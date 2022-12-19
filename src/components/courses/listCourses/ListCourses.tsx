import './ListCourses.css';

import { CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';

import Course from '../../../models/Course';
import { search } from '../../../services/Service';
import Card from '../../cardCourse/CardCourse';
import Loading from '../../static/loading/Loading';
import Footer from '../../static/footer/Footer';

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      navigate("/login");
      toast.error("Você precisa estar logada para acessar os cursos.");

    }
  }, [token]);

  async function getCourse() {
    await search("/products", setCourses, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
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
