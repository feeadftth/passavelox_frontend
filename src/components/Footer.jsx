import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme/themes'
import Logo from '../components/Logo'
import Instagram from './svg/Instagram'
import TikTok from './svg/TikTok'
import Facebook from './svg/Facebook'
import WhatsApp from './svg/Whatsapp'
import Twitter from './svg/Twitter'

const Footer = () => {
    const colors = theme.palette
    return (
        <>
            <Divider sx={{ borderColor: colors.text.disabled }} />
            <footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: colors.background.default }}>
                <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', p: '5vh', ml: '10vw', mr: '10vw' }}>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Box width={'100%'} display='flex' justifyContent='center' alignItems='center'>
                            <Logo size={'small'} text={true} />
                        </Box>
                    </Box>
                    <Box width={'100%'} height={'25vh'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Typography variant='body1' color={colors.text.disabled}>
                            Termini e Condizioni
                        </Typography>
                    </Box>
                    <Box width={'280px'} height={'100px'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Instagram />
                        <TikTok />
                        <Facebook />
                        <WhatsApp />
                        <Twitter />
                    </Box>


                </Container>

            </footer>
        </>
    )
}

export default Footer