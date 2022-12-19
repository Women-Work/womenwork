import { Typography } from '@material-ui/core';
import { Button, Grid } from '@mui/material';
import Image from 'mui-image';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import Course from '../../../models/Course';
import { searchId } from '../../../services/Service';

export default function ShowCourse() {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    getCourseById(id);
  }, [id]);

  async function getCourseById(id: string | undefined){
    await searchId(`/products/${id}`, setCourse, {
      headers: {
        'Authorization': token
      }
    });
  }

  return (
    <Grid container justifyContent='center'>
      <Grid
      item xs={8}
      container
      sx={{ backgroundColor: 'white', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', minHeight: '90vh', padding: 5, marginTop: 2 }}>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <img
              style={{ width: '100%', height: 'auto', padding: 0, marginRight: 'auto', borderRadius: '5px' }}
              src={`../assets/images/courses/${id}.png`}
              alt=""
            />
          </Grid>
          <Grid item xs={6} sx={{ paddingLeft: 5, paddingTop: 3 }}>
            <Typography variant='h3' className='title-poppins' style={{ marginBottom: 3 }}>
              {course?.title}
            </Typography>
            <Typography variant='h5' className='text-poppins' style={{ marginBottom: 5 }}>
            R${course?.price.toString().replace('.', ',')}
            </Typography>
            <Typography variant='body1' style={{ color: '#353535' }} >
              {course?.description}
            </Typography>
            <Button variant='contained' color='primary' fullWidth>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
