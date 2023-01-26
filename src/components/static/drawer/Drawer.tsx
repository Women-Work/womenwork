import { Drawer, Box, Typography, IconButton, ListItem, ListItemText, ListItemIcon, List, Divider, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react';
import './Drawer.css';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function SDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)} sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography >
                        < img className='logo-img' src="assets/images/ww-logo.png" alt="" />
                    </Typography>
                </Box>

                <List>

                    <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                        <ListItem component={Link} to="/">
                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" className='list-item' />
                        </ListItem>
                    </ListItemButton>

                    <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                        <ListItem component={Link} to="/courses">
                            <ListItemIcon>
                                < MenuBookOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cursos" className='list-item' />
                        </ListItem>
                    </ListItemButton>

                    <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                        <ListItem component={Link} to="/about">
                            <ListItemIcon>
                                < InfoOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sobre" className='list-item' />
                        </ListItem>
                    </ListItemButton>
                </List>

                <Divider />

                <List>

                    <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                        <ListItem component={Link} to="/login">
                            <ListItemIcon>
                                < LoginOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" className='list-item' />
                        </ListItem>
                    </ListItemButton>

                    <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                        <ListItem component={Link} to="/signup">
                            <ListItemIcon>
                                <AddCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cadastro" className='list-item' />
                        </ListItem>
                    </ListItemButton>

                </List>
            </Drawer>
        </>
    );
}