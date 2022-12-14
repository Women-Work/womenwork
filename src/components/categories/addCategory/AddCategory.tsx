import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from '@material-ui/core';
  import React, { ChangeEvent, useEffect, useState } from 'react';
  import { useNavigate, useParams } from 'react-router-dom';
  import { toast } from 'react-toastify';
  import useLocalStorage from 'react-use-localstorage';
  
  import Category from '../../../models/Category';
  import Course from '../../../models/Course';
  import { post, put, search, searchId } from '../../../services/Service';
  
  export default function AddCategory() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token', '');
    const [categories, setCategories] = useState<Category[]>([]);
  
    useEffect(() => {
      if (token == '') {
        toast.warn('Você precisa estar logado para acessar essa página');
        navigate('/login');
      }
    }, [token]);
  
    const [category, setCategory] = useState<Category>({
      id: 0,
      name: ''
    });
  
    const [course, setCourse] = useState<Course>({
      id: 0,
      title: '',
      description: '',
      price: 0,
      category: null
    });
  
  
    useEffect(() => {
      getCategories();
      if(id !== undefined){
        findCategoriesById(id);
      }
    }, [id]);
  
    async function getCategories() {
      await search('/categories', setCategories, {
        headers: {
          'Authorization': token
        }
      });
    }
  
    async function findCategoriesById(id: string) {
      await search(`/categories/${id}`, setCategories, {
        headers: {
          'Authorization': token
        }
      });
    }
  
    function updatedCategory(e: ChangeEvent<HTMLInputElement>) {
      setCategory({
        ...category,
        [e.target.name]: e.target.value,
      });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
  
      if(id !== undefined){
        await put('/categories', categories, setCategories, {
          headers: {
            'Authorization': token
          }
        });
        toast.success('Categoria atualizada com sucesso!');
      } else {
        await post('/categories', categories, setCategories, {
          headers: {
            'Authorization': token
          }
        });
        toast.success('Categoria cadastrada com sucesso!');
      }
      navigate('/categories');
    }
    
    return (
          <Container maxWidth="sm" className="topo">
              <form onSubmit={onSubmit}>
                <FormControl>
                  <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro Categoria</Typography>
                  <TextField value={category.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategory(e)} id="name" label="Título" name="name" variant="outlined" margin="normal" fullWidth />
                      <Button type="submit" variant="contained" color="primary">
                          Finalizar
                      </Button>
                      </FormControl>
              </form>
          </Container>
      )
  }
  