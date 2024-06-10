import { Link, useNavigate, } from "react-router-dom"
import SeparatorB from "./ShadcdnUI/Separator"
import { Typography, Box, Container, Button, Divider, Card, CardContent, Step } from "@mui/material"
import Wallpaper from '../components/svg/Wallpaper'
import { theme } from "../theme/themes"
import { FormatListBulletedOutlined, KeyboardArrowRightRounded } from "@mui/icons-material"

const colors = theme.palette

const StepCard = ({ title, id, children }) => {

    return (
        <Box my={3}>
            <Card>
                <CardContent>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <Box pt={2}>
                            <Typography variant="h5">
                                {title}
                            </Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} mb={2}>
                            <Box display={'flex'} ml={'20px'} justifyContent={'center'} alignItems={'center'} sx={{ height: '50px', width: '50px' }}>
                                <Typography variant="h4" color={'primary'}>
                                    {id}
                                </Typography>
                            </Box>
                            <Box width='100%' pl={6} py={3} display={'flex'} flexDirection={'column'} mr={'20px'} alignItems={'center'}>
                                <Typography variant="body1" color={'text.secondary'}>
                                    {children}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )

}



const Home = () => {
    return (
        <>
            <Container>
                <Box display={'flex'} flexDirection={'column'} >
                    <Typography variant="h1" fontSize={'6.5rem'} letterSpacing={'-0.5rem'}>
                        L'attesa finisce
                    </Typography>
                    <Typography variant="h1" fontSize={'6.5rem'} letterSpacing={'-0.5rem'} color={colors.secondary.main}>
                        qui.
                    </Typography>
                    <Divider sx={{ p: '10px' }} />
                    <Box pt={'20px'}>
                        <Typography align="center" variant="subtitle1" color={colors.text.primary}>
                            Lo stress per ottenere il passaporto appartiene al passato...
                        </Typography>
                        <Box display={'flex'} justifyContent={'center'} pt={'10px'}>
                            <Typography variant="subtitle1" fontWeight={600}>
                                Soddisfatti
                            </Typography>
                            <Box pl={'5px'}>
                                <Typography variant="subtitle1">
                                    o rimborsati.
                                </Typography>
                            </Box>
                        </Box>
                        <Box width={'100%'} display={'flex'} justifyContent={'center'} pb={'40px'} pt={'30px'}>
                            <Button endIcon={<KeyboardArrowRightRounded />} size="large" variant="contained">
                                Prenota
                            </Button>
                        </Box>
                    </Box>
                    <Divider />
                    <Box my={4}>
                        <StepCard title={'Compila'} id={'1'}>
                            Inserisci tutti i dati necessari per la prenotazione.
                            <br />
                            Li useremo con molta cura!
                        </StepCard>
                        <Box py={3} sx={{ height: '150px' }} width={'100%'} display={'flex'} justifyContent={'center'} >
                            <Divider orientation="vertical" sx={{ borderColor: colors.secondary.main, borderRightWidth: '2px' }} />
                        </Box>
                        <StepCard title={'Scegli'} id={'2'}>
                            Seleziona il piano più adatto alle tue esigenze, ce n'è per tutti.
                        </StepCard>
                        <Box py={3} sx={{ height: '150px' }} width={'100%'} display={'flex'} justifyContent={'center'} >
                            <Divider orientation="vertical" sx={{ borderColor: colors.secondary.main, borderRightWidth: '2px' }} />
                        </Box>
                        <StepCard title={'Rilassati'} id={'3'}>
                            La parte difficile è terminata!
                            <br />
                            È tempo organizzare il viaggio...
                        </StepCard>
                    </Box>
                </Box>
            </Container >
        </>
    )
}

export default Home