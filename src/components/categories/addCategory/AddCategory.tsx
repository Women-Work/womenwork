import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Category from '../../../models/Category';
import { post, put, searchId } from '../../../services/Service';
import { selectToken } from '../../../store/tokenSlice';
import { useAppSelector } from '../../../common/hooks';

export default function AddCategory() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useAppSelector(selectToken);

    const [category, setCategory] = useState<Category>({
        id: 0,
        name: '',
        icon: ''
    });

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        searchId(`/categories/${id}`, setCategory, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategory(e: ChangeEvent<HTMLInputElement>) {

        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(category))

        if (id !== undefined) {
            console.log(category)
            await put(`/categories`, category, setCategory, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso');
        } else {
            await post(`/categories`, category, setCategory, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/categories')
    }

    return (
        <>
            <Container maxWidth="sm" className="topo">
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro Categoria</Typography>
                    <TextField value={category.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategory(e)} id="name" label="Título" variant="outlined" name="name" margin="normal" fullWidth />
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </form>
            </Container>
        </>
    )
}
