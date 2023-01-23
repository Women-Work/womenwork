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

import { useAppSelector } from '../../../common/hooks';
import Category from '../../../models/Category';
import Course from '../../../models/Course';
import { post, put, search, searchId } from '../../../services/Service';
import { selectToken } from '../../../store/tokenSlice';

export default function AddCourses() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useAppSelector(selectToken);
  const [categories, setCategories] = useState<Category[]>([]);

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
    setCourse({
      ...course,
      category: category
    });
  }, [category]);

  useEffect(() => {
    getCategories();
    if(id !== undefined){
      findCourseById(id);
    }
  }, [id]);

  async function getCategories() {
    await search('/categories', setCategories, token);
  }

  async function findCourseById(id: string) {
    await search(`/products/${id}`, setCourse, token);
  }

  function updatedCourse(e: ChangeEvent<HTMLInputElement>) {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
      category: category
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if(id !== undefined){
      await put('/products', course, setCourse, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Curso atualizado com sucesso!');
    } else {
      await post('/products', course, setCourse, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Curso cadastrado com sucesso!');
    }
    navigate('/courses');
  }
  
  return (
    <>
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro curso</Typography>
                <TextField value={course.title} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCourse(e)} id="title" label="Título" variant="outlined" name="title" margin="normal" fullWidth />
                <TextField value={course.description} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCourse(e)}  id="description" label="Descrição" name="description" variant="outlined" margin="normal" fullWidth />
                <TextField value={course.price} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCourse(e)}  id="price" label="Preço" name="price" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => searchId(`/categories/${e.target.value}`, setCategory, {
                            headers: {
                                'Authorization': token
                            }})
                        }>
                        {
                            categories.map(category => (
                                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para o curso</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    </>
    )
}
