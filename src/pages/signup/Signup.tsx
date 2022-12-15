import './Signup.css';

import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';

import { User } from '../../models/User';
import { userRegister } from '../../services/Service';


export default function Singup() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [confirmPassword, setConfirmPassword] = useState<String>("");
    const [user, setUser] = useState<User>(
        {
            name: '',
            user: '',
            password: ''
        });

    const [userResult, setUserResult] = useState<User>(
        {
            id: '',
            name: '',
            user: '',
            password: ''
        });

    useEffect(() => {
        if (token) {
            toast.success("Acesso negado.");
            navigate("/home");
        }
    });

    useEffect(() => {
        if (userResult.error) {
            toast.error(userResult.error);
        } else if (userResult.id != '') {
            toast.success('Usuário cadastrado com sucesso.');
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
            await userRegister(`/users/register`, user, setUserResult);
        } else {
            toast.error('As senhas informadas não correspondem.');
        }
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center'>
                <Grid item xs={3} sm={4}>
                    <Image style={{ backgroundColor: 'none' }} src='assets/images/signup.svg' alt='' />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3} sm={4}>
                    <Box paddingX={10}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h2' color='textPrimary' component='h3' className='title-poppins'>Cadastre-se</Typography>
                            <TextField value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='name' margin='normal' required fullWidth />
                            <TextField value={user.user} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='user' margin='normal' required fullWidth type='email' />
                            <TextField inputProps={{ pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$" }} helperText='A senha deve conter letras maiúsculas, minúsculas, números e caracteres especias.' value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='password' margin='normal' type='password' required fullWidth />
                            <TextField value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)} id='confirmarSenha' label='Confirmar senha' variant='outlined' name='confirmPassword' margin='normal' type='password' required fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='primary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='secondary'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}