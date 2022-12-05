import React, { ChangeEvent, useEffect, useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { UserLogin } from '../../models/UserLogin';
import { login } from '../../services/Service';
import useLocalStorage from 'react-use-localstorage';



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

    useEffect(()=>{
        if(token != ''){
            navigate('/home');
        }
    }, [token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/auth/login`, userLogin, setToken);

            alert('Usuário logado com sucesso!');
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid className='Grid-1' container direction='row' justifyContent='center' alignItems='center'>
            <Grid item alignItems='center' lg={6} md={12}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.user} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='E-mail' variant='outlined' name='user' margin='normal' fullWidth />
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                    Logar 
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
            <Grid item lg={6} md={12} className='imagem'>
                <Box display='flex' justifyContent='center'>
                    <img src="assets/images/image-login.svg" alt="" />
                </Box>
            </Grid>
        </Grid>
    );
}