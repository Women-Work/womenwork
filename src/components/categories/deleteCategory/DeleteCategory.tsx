import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector } from '../../../common/hooks';
import Category from '../../../models/Category';
import { deleteId, searchId } from '../../../services/Service';
import { selectToken } from '../../../redux/tokenSlice';
import PathValidator from '../../../common/PathValidator';

export default function DeleteCategory() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useAppSelector(selectToken);
  const [categories, setCategory] = useState<Category>();

  useEffect(() => {
    if(id !== undefined){
      findCategoryById(id);
    }
  }, [id]);

  async function findCategoryById(id: string) {
    searchId(`/categories/${id}`, setCategory, {
      headers: {
        'Authorization': token
      }
    });
  }

  function yes() {
    deleteId(`/categories/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Categoria removida com sucesso!');
    navigate('/categories');
  }

  function no() {
    navigate('/categories');
  }

  return (
    <>
      <PathValidator />
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja remover a categoria:
              </Typography>
              <Typography color="textSecondary" >
                {categories?.name}
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