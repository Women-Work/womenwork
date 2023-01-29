import './Signup.css';

import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import Image from 'mui-image';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { User } from '../../models/User';
import { userRegister } from '../../services/Service';


export default function Singup() {

    let navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<String>("");


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

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
        if (userResult.error) {
            toast.error(userResult.error);
        } else if (userResult.id !== '') {
            toast.success('Usuária cadastrada com sucesso.');
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

        if (confirmPassword === user.password) {
            await userRegister(`/users/register`, user, setUserResult);
        } else {
            toast.error('As senhas informadas não correspondem.');
        }
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='mudarcel'>
                <Grid item xs={4} className='mudarcel'>
                    <Image
                        style={{ width: '100%', height: 'auto', padding: 0, marginRight: 'auto', borderRadius: '5px' }}
                        src='assets/images/signup.svg'
                        duration={300}
                        alt=""
                    />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={11} md={4}>
                    <Box className='margin-cel'>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h2' color='textPrimary' className='title-poppins h2'>Cadastre-se</Typography>
                            <Typography variant='h3' color='textPrimary' className='title-poppins h3'>Cadastre-se</Typography>
                            <TextField value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='name' margin='normal' required fullWidth />
                            <TextField value={user.user} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='user' margin='normal' required fullWidth type='email' />
                            <TextField
                                inputProps={{ pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$" }}
                                helperText='A senha deve ter no mínimo 8 caracteres, conter letras maiúsculas, minúsculas, números e caracteres especiais.'
                                value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha' label='Senha' variant='outlined' name='password' margin='normal' required fullWidth
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge='end'
                                            >
                                                {showPassword ? <Visibility style={{ color: '#A0A0A0' }} /> : <VisibilityOff style={{ color: '#A0A0A0' }} />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                value={confirmPassword}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)}
                                id='confirmarSenha' label='Confirmar senha' variant='outlined' name='confirmPassword' margin='normal' required fullWidth
                                type={showConfirmPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownConfirmPassword}
                                                edge='end'
                                            >
                                                {showConfirmPassword ? <Visibility style={{ color: '#A0A0A0' }} /> : <VisibilityOff style={{ color: '#A0A0A0' }} />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Box marginTop={2} className='regis-button'>
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