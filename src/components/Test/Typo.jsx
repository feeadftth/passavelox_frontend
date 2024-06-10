import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import { theme } from '../../theme/themes'
const colors = theme.palette

const Typo = () => {
    return (
        <Container>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='h1'>Head 1</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='h2'>Head 2</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='h3'>Head 3</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='h4'>Head 4</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='h5'>Head 5</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='subtitle1'>Subtitle 1</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='subtitle2'>Subtitle 2</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='body1'>Body Body Body Body Body</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Typography variant='body1' color={colors.text.disabled}>Disabled Disabled Disabled Disabled</Typography>
            </Box>
        </Container>
    )
}

export default Typo