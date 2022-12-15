import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import Course from '../../../models/Course';
import { search } from '../../../services/Service';
import CardCourse from '../../cardCourse/CardCourse';
import Loading from '../../static/loading/Loading';

export default function Search() {
  const [token] = useLocalStorage('token');
  const [searchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == ''){
      toast.error("Você precisa estar logado para pesquisar um curso.");
      navigate("/login");
    }
  }, [token]);


  const query = searchParams.get('q');

  const getSearchedCourses = async () => {
    await search(`/products/title/${query}`, setCourses, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getSearchedCourses();
  }, [query]);


  return (
    <>
    <Grid container justifyContent='center' alignItems='flex-start' marginX={5}>
      <Grid item container xs={12} sx={{ marginX: 5 }}>
        <Typography variant='h4' className='title-poppins'>Resultados para: <span style={{ color: '#E1A6A0' }}>{query}</span></Typography>
      </Grid>
      {
        isLoading ?
        <Loading />
        :
        courses.length > 0 ?
        courses.map((course) => (
          <Grid key={course.id} item xs={10} md={5} lg={3}>
            <CardCourse
              id={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
            />
        </Grid>
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
