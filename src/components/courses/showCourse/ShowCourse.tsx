import { makeStyles, Typography } from '@material-ui/core';
import { Button, Grid } from '@mui/material';
import Image from 'mui-image';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector } from '../../../common/hooks';
import Course from '../../../models/Course';
import { searchId } from '../../../services/Service';
import { selectToken } from '../../../store/tokenSlice';
import Loading from '../../static/loading/Loading';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#E1A6A0',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#C8857F',
      color: '#fff',
    },
  }
});

export default function ShowCourse() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useAppSelector(selectToken);
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    getCourseById(id);
  }, [id]);

  async function getCourseById(id: string | undefined) {
    await searchId(`/products/${id}`, setCourse, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      setIsLoading(false);
    });
  }

  const handlePurchase = () => {
    if (token) {
      toast.success(`Curso ${course?.title} comprado com sucesso!`);
    } else {
      navigate('/login');
    }
  }

  const buttonSX = {
    backgroundColor: '#E1A6A0',
    "&:hover": {
      backgroundColor: '#C8857F'
    },
  };

  return (
    <Grid container justifyContent='center' alignItems='center'>
      {
        isLoading ?
          <Loading />
          :
          <Grid
            item xs={10}
            container
            sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: 5 }}>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                <Image
                  style={{ width: '100%', height: 'auto', padding: 0, marginRight: 'auto', borderRadius: '5px' }}
                  src={`../assets/images/courses/${id}.png`}
                  duration={300}
                  alt=""
                />
                <Link to="/courses">
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={handlePurchase}
                    sx={buttonSX}
                  >
                    Comprar
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6} sx={{ paddingLeft: 5, paddingTop: 2 }} alignSelf='center'>
                <Typography variant='h3' className='title-poppins' style={{ marginBottom: 3 }}>
                  {course?.title}
                </Typography>
                <Typography variant='h5' className='text-poppins' style={{ marginBottom: 5 }}>
                  R${course?.price.toString().replace('.', ',')}
                </Typography>
                <Typography variant='body1' style={{ color: '#353535', textAlign: 'justify' }}>
                  {course?.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
      }
    </Grid>
  )
}
