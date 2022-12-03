import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";
import "./Footer.css"
import { Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
      <Grid container>
        <Grid xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center" className='footer-color'>
              <Typography variant="h6" align="center" gutterBottom className='text-color'>Women Work</Typography>
          </Box>
          <Box className='footer-copy' display="flex" justifyContent="space-around">
            <Box display='flex' justifyContent='center' alignItems='center'>
              <a href="#" target="_blank">
                <FacebookIcon className='social' />
              </a>
              <a href="https://github.com/Women-Work/womenwork" target="_blank">
                <GitHubIcon className='social' />
              </a>
              <a href="#" target="_blank">
                <LinkedInIcon className='social' />
              </a>
            </Box>
            <Box>
              <Typography variant="subtitle1" align="center" gutterBottom className='text-color'>© 2022 Copyright</Typography>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'right' }}>
              <Typography variant="subtitle1" align="center" gutterBottom className='text-color'> Sobre nós </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

export default Footer ;