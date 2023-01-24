import './Footer.css';

import { Grid, Typography } from '@material-ui/core';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logofooter from '../../../assets/logo-footer.png';

function Footer() {
  return (
    <Box className='footer-copy' display="flex" justifyContent="space-around" justifyItems='center'>
      <Grid container style={{ paddingTop: 10 }}>
        <Grid item container xs={4} justifyContent='center' alignItems='center'>
          <Grid item sm={1}>
            <Link href="https://www.youtube.com/channel/UCyALtu4kMdQq4I5hLME_LwQ" target="_blank">
              <YoutubeIcon className='social' />
            </Link>
          </Grid>
          <Grid item sm={1}>
            <Link href="https://linktr.ee/womenworkgit" target="_blank">
              <GitHubIcon className='social' />
            </Link>
          </Grid>
          <Grid item sm={1}>
            <Link href="https://linktr.ee/womenworkteam" target="_blank">
              <LinkedInIcon className='social' />
            </Link>
          </Grid>
        </Grid>
        <Grid item container xs={4} alignItems='center' justifyContent='center'>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom className='text-color'>
              <img src={logofooter} alt='logo-footer' className='mudarnocel' />
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={4} alignItems='center'>
          <Grid item xs={12}>
            <RouterLink to='/about'>
              <Typography variant="subtitle1" align="center" gutterBottom className='text-color'> Sobre nós </Typography>
            </RouterLink>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer;