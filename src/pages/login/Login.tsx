import './Login.css';

import { Button, TextField, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import Image from 'material-ui-image';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';

import { UserLogin } from '../../models/UserLogin';
import { login } from '../../services/Service';



export function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: '',
            user: '',
            password: '',
            token: ''
        }
    );

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home');
        }
    }, [token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/auth/login`, userLogin, setToken);
            toast.success('Usuário logado com sucesso.');
        } catch (error) {
            toast.error('E-mail ou senha inválido.');
        }
    }

    return (
        <Grid className='Grid-1' container direction='row' justifyContent='center' alignItems='center'>
            <Grid item alignItems='center' lg={6} md={12}>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Login</Typography>
                        <TextField value={userLogin.user} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='E-mail' variant='outlined' name='user' margin='normal' fullWidth />
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Entrar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>
                            <Link to='/signup' className='button-cd'>
                                Cadastre-se
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={6} md={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <Image src='/assets/images/login.svg' alt='' />
            </Grid>
        </Grid>
    );
}