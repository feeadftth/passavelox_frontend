import { Container, Box, Button, Drawer, IconButton, Divider, alpha } from "@mui/material"
import React, { useState, useEffect, createContext } from "react"
import ExtendedNav from "./Nav/ExtendedNav"
import MenuIcon from '@mui/icons-material/Menu';
import BurgerMenu from "./Nav/BurgerMenu";
import Logo from "./Logo";
import { theme } from '../theme/themes'



const colors = theme.palette

export const BurgerContext = createContext(false)

const MenuToggle = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = (status) => () => {
        setOpen(status)
    }

    return (
        <BurgerContext.Provider value={{ open, toggleMenu }}>
            <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Box display='flex' justifyContent='flex-end' alignItems='center'>
                    <IconButton onClick={toggleMenu(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Drawer open={open} onClose={toggleMenu(false)}>
                    <BurgerMenu />
                </Drawer>
            </Container>
        </BurgerContext.Provider>
    )
}

const Header = () => {
    const [desktop, setDesktop] = useState(window.innerWidth > 900)

    const updateWindowSize = () => {
        setDesktop(window.innerWidth > 900)
    }

    useEffect(() => {
        window.addEventListener("resize", updateWindowSize)
        return () => {
            window.removeEventListener("resize", updateWindowSize)
        }
    })
    return (
        <>
            <header className="Sticky-Header">
                <Container maxWidth={false} sx={{ p: '2vh !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '10vh', ml: '0px', mr: '0px', backgroundColor: alpha(colors.background.default, 0.7) }}>
                    <Container>
                        <Logo />
                    </Container>
                    {desktop ? <ExtendedNav /> : <MenuToggle />}
                </Container>
                <Divider variant="middle" sx={{ borderColor: colors.secondary.dark }} />
            </header >
        </>
    )
}

export default Header