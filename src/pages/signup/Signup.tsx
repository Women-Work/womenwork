import './Signup.css';

import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { User } from '../../models/User';
import { userRegister } from '../../services/Service';
import { UserResult } from '../../models/UserResult';

export default function Singup() {

    let navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<String>("");
    const [user, setUser] = useState<User>(
        {
            name: '',
            user: '',
            password: ''
    });

    const [userResult, setUserResult] = useState<UserResult>(
        {
            id: '',
            name: '',
            user: '',
            password: ''
    });

    useEffect(() => {
        if (userResult.id != '') {
            navigate("/login");
        }
    }, [userResult]);


    function confirmPasswordHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value);
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmPassword == user.password) {
            userRegister(`/users/register`, user, setUserResult);
            console.log(userResult);
            alert('Usuario cadastrado com sucesso');
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.');
        }
    }
    return (

        <Grid container direction='row' justifyContent='center'>
            <Grid item xs={3} sm={6} className='imagem2'></Grid>
            <Grid item xs={3} sm={4} >
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>
                        <TextField value={user.name} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='name' margin='normal' required fullWidth />
                        <TextField value={user.user} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='user' margin='normal' required fullWidth type='email'/>
                        <TextField value={user.password} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='password' margin='normal' type='password' required fullWidth />
                        <TextField value={confirmPassword} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)} id='confirmarSenha' label='Confirmar senha' variant='outlined' name='confirmPassword' margin='normal' type='password' required fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}