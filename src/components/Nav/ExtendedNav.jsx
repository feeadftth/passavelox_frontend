import React, { useContext, useEffect, useState } from 'react'
import { Typography, Button, Container, Box } from '@mui/material'
import { useLocation, Link } from 'react-router-dom'
import { theme } from '../../theme/themes'
import { BurgerContext } from '../Header'
const colors = theme.palette

export const NavbarItem = ({ children, to, active, burger }) => {
    const activeColor = (active === to) ? colors.secondary.main : 'primary'

    const size = burger ? '1.5rem' : '1.3rem'

    const { open, toggleMenu } = useContext(BurgerContext)

    let content = (<Button onClick={burger ? toggleMenu(false) : null} component={Link} to={to} variant="text" sx={{ "&:hover": { backgroundColor: 'transparent' }, color: activeColor }}>
        <Typography noWrap variant="h5" fontWeight={600} fontSize={size}>
            {children}
        </Typography>
    </Button >)

    // if (burger) {
    //     content = (<Button onClick={toggleMenu(false)} component={Link} to={to} variant="text" sx={{ "&:hover": { backgroundColor: 'transparent' }, color: activeColor }}>
    //         <Typography noWrap variant="h5" fontWeight={600} fontSize={size}>
    //             {children}
    //         </Typography>
    //     </Button >
    //     )
    // }

    return content
}

const ExtendedNav = () => {
    const [active, setActive] = useState('Home')

    let location = useLocation()
    useEffect(() => {
        setActive(location.pathname)
    }, [location])
    return (
        <>
            <Container sx={{ maxWidth: '40vw !important', display: 'flex', flexDirection: "row", justifyContent: 'space-evenly' }}>
                <Box display='flex' justifyContent='center'>
                    <NavbarItem to='/home' active={active}>
                        Home
                    </NavbarItem>
                </Box>
                <Box display='flex' justifyContent='center' >
                    <NavbarItem to='/mission' active={active}>
                        Chi siamo
                    </NavbarItem>
                </Box>
                <Box display='flex' justifyContent='center'>
                    <NavbarItem to='/faq' active={active}>
                        FAQ
                    </NavbarItem>
                </Box>
                <Box display='flex' justifyContent='center'>
                    <NavbarItem to='/contatti' active={active}>
                        Contattaci
                    </NavbarItem>
                </Box>
            </Container>
        </>
    )
}

export default ExtendedNav