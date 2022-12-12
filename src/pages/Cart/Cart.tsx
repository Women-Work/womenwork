import { useTheme } from '@material-ui/styles';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';


export function Cart() {

    return (
    <Grid className='Grid-1' container direction='row' justifyContent='center' alignItems='center'>
        <Grid item lg={6} md={12} >
            <Box display='flex' justifyContent='center'>
                <img className='imgLogin' src="assets/images/img-cart.png" alt="" />
            </Box>
        </Grid>
        <Grid item alignItems='center' lg={6} md={12}>
            <Button variant="contained" color="secondary">Total R$ 20,00</Button>
            <Button variant="contained" color="success">Finalizar</Button>
        </Grid>
    </Grid>
)
    }