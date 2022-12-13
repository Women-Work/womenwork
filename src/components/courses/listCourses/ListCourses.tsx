import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { search } from '../../../services/Service';
import Card from '../../card/Card';
import Course from '../../../models/Course';
import { CircularProgress } from '@mui/material';

function Courses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      navigate("/login");
      toast.warn("Você precisa estar logado");

    }
  }, [token]);

  async function getCourse() {
    await search("/products", setCourses, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCourse();
  }, [courses.length]);

  return (
    <>
          <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent="center"
          style={{ margin: 5 }}
          >
            {
              courses.length === 0 ?
              <CircularProgress sx={{ marginY: 5}} />
              :
              courses.map((course) => (
                <Grid key={course.title} item xs={10} md={5} lg={3}>
                  <Card
                    title={course.title}
                    text={course.description}
                    price={course.price} />
                </Grid>
              ))
            }
          </Grid>
    </>
  )
}

export default Courses;
