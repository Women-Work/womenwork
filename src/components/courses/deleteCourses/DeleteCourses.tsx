import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';

import Course from '../../../models/Course';
import { deleteId, searchId } from '../../../services/Service';
import Footer from '../../static/footer/Footer';

export default function DeleteCourses() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    if (token == '') {
      toast.warn('Você precisa estar logada para acessar essa página');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if(id !== undefined){
      findCourseById(id);
    }
  }, [id]);

  async function findCourseById(id: string) {
    searchId(`/products/${id}`, setCourse, {
      headers: {
        'Authorization': token
      }
    });
  }

  function yes() {
    deleteId(`/products/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Curso removido com sucesso!');
    navigate('/courses');
  }

  function no() {
    navigate('/courses');
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja remover o curso:
              </Typography>
              <Typography color="textSecondary">
                {course?.title}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={yes} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={no} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}