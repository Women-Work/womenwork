import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import {Box, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';


export function Login() {

    return (
        <Grid className='Grid-1' container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' lg={6} md={12}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
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
                            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>
                                <Link to='/signup' className='button-cd'>
                                    Cadastre-se
                                </Link>
                            </Typography>  
                    </Box>
                </Box>
            </Grid>
            <Grid lg={6} md={12} className='imagem'>
                <Box display='flex' justifyContent='center'>
                <img src="assets/images/image-login.png" alt="" />
                </Box>
            </Grid>
        </Grid>
    );
}