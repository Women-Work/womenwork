import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListCategory.css';
import useLocalStorage from 'react-use-localstorage';
import Category from '../../../models/Category';
import { search } from '../../../services/Service';

function ListCategory() {
  const [categorys, setCategorys] = useState<Category[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])


  async function getCategory(){
    await search("/categoria", setCategorys, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getCategory()
  }, [categorys.length])

  return (
    <>
    {
      categorys.map(category => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Categoria
            </Typography>
            <Typography variant="h5" component="h2">
              {category.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioCategoria/${category.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarCategoria/${category.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
}
    </>
  );
}


export default ListCategory;