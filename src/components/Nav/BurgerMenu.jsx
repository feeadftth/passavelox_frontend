import { Box, Container, List, ListItem, ListItemButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavbarItem } from './ExtendedNav'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const BurgerMenu = () => {

    const [active, setActive] = useState('Home')

    let location = useLocation()
    useEffect(() => {
        setActive(location.pathname)
    }, [location])

    return (
        <Container sx={{ height: '100%' }}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
                <List sx={{ height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <ListItem key={'Home'} sx={{ justifyContent: 'center' }}>
                        <NavbarItem to={'/home'} active={active} burger={true}>
                            Home
                        </NavbarItem>
                    </ListItem>
                    <ListItem key={'Mission'} sx={{ justifyContent: 'center' }} >
                        <NavbarItem to={'/mission'} active={active} burger={true}>
                            Chi siamo
                        </NavbarItem>
                    </ListItem>
                    <ListItem key={'Faq'} sx={{ justifyContent: 'center' }}>
                        <NavbarItem to={'/faq'} active={active} burger={true}>
                            FAQ
                        </NavbarItem>
                    </ListItem>
                    <ListItem key={'Contatti'} sx={{ justifyContent: 'center' }}>
                        <NavbarItem to={'/contatti'} active={active} burger={true}>
                            Contattaci
                        </NavbarItem>
                    </ListItem>
                    <ListItem key={'Contatti'} sx={{ justifyContent: 'center' }}>
                        <NavbarItem to={'/payment'} active={active} burger={true}>
                            Test Pagamento
                        </NavbarItem>
                    </ListItem>
                </List>
            </Box>
        </Container >
    )
}

export default BurgerMenu