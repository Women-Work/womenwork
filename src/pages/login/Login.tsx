import './Login.css';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Image from 'mui-image';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { UserLogin } from '../../models/UserLogin';
import { addToken } from '../../redux/tokenSlice';
import { login as loginUser } from '../../redux/userSlice';
import { login } from '../../services/Service';
import { searchUser } from '../../services/UserService';

export function Login() {
    let navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const dispatch = useDispatch();
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

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const request = await login(`/auth/login`, userLogin);
            const user = await searchUser(`/users/${request.data.user}`, request.data.token);
            dispatch(loginUser(user));
            dispatch(addToken(request.data.token));
            navigate(-1);
        } catch (error) {
            toast.error('Ocorreu um erro, tente novamente.');
        }
    }

    return (
        <>
            <Grid className='Grid-1' container direction='row' justifyContent='center' alignItems='center'>
                <Grid item alignItems='center' lg={6} md={12}>
                    <Box paddingX={10}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='left' className='title-poppins'>Login</Typography>
                            <Box display='flex' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' gutterBottom style={{ color: '#909090' }}>Não tem uma conta?</Typography>
                                </Box>
                                <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>
                                    <Link to='/signup' className='button-cd'>
                                        Cadastre-se
                                    </Link>
                                </Typography>
                            </Box>
                            <TextField value={userLogin.user} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='E-mail' variant='outlined' name='user' margin='normal' required fullWidth />
                            <TextField
                                value={userLogin.password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                id='senha' label='Senha' variant='outlined' name='password' margin='normal'
                                type={showPassword ? 'text' : 'password'} required fullWidth
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
                            <Box marginTop={2} textAlign='left'>
                                <Button type='submit' variant='contained' color='secondary'>
                                    Entrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid item lg={5} md={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <Image
                        style={{ width: '100%', height: 'auto', padding: 0, marginRight: 'auto', borderRadius: '5px' }}
                        src='/assets/images/login.svg'
                        duration={300}
                        alt=""
                        />
                </Grid>
            </Grid>
        </>
    );
}