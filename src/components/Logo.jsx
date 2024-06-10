import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = ({ size, text }) => {
    const height = size === 'small' ? '30px' : '60px'

    const logo = text ? 'src/assets/TextLogoLight.png' : '/src/assets/FullLogoTest3.png'

    return (
        <Box component={Link} to={'/'} display='flex' paddingLeft='0px' justifyContent={'flex-start'} alignItems={'center'} sx={{ textDecoration: 'none' }}>
            <img height={height} width='auto' src={logo} alt="logo" />
        </Box>
    )

}

export default Logo