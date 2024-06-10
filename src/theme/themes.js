import { createTheme, responsiveFontSizes } from "@mui/material";
import geistsans from '../assets/GeistVariableVF.woff2'
import 'non.geist'
import { alpha } from "@mui/material";

export const tokens = {
    // redAccent: {
    //     100: "#e6ccd2",
    //     200: "#cd99a5",
    //     300: "#b56679",
    //     400: "#9c334c",
    //     500: "#83001f",
    //     600: "#690019",
    //     700: "#4f0013",
    //     800: "#34000c",
    //     900: "#1a0006"
    // },
    // blueAccent: {
    //     100: "#ccdce7",
    //     200: "#99b8d0",
    //     300: "#6695b8",
    //     400: "#3371a1",
    //     500: "#004e89",
    //     600: "#003e6e",
    //     700: "#002f52",
    //     800: "#001f37",
    //     900: "#00101b"
    // },
    primary: {
        100: "#d3d3d4",
        200: "#a7a7a9",
        300: "#7c7c7e",
        400: "#505053",
        500: "#242428",
        600: "#1d1d20",
        700: "#161618",
        800: "#0e0e10",
        900: "#070708"

    },
    background: {
        main: "#f9fefb",
        paper: "#FFFFFF"
    },
    blueAccent: {
        300: "#b5e0ff",
        400: "#b0d9f7",
        500: "#95b8d1",
        600: "#708b9e",
        700: "#5e7484"
    },
    greenAccent: {
        300: "#EEFFB9",
        400: "#E2F2AF",
        500: "#BFCC94",
        600: "#8f996f",
        700: "#777f5c"
    },
    redAccent: {
        500: "#FF6B6B",
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            dark: tokens.greenAccent[700],
            darkish: tokens.greenAccent[600],
            main: tokens.greenAccent[500],
            lightish: tokens.greenAccent[400],
            light: tokens.greenAccent[300]
        },
        secondary: {
            dark: tokens.blueAccent[700],
            darkish: tokens.blueAccent[600],
            main: tokens.blueAccent[500],
            lightish: tokens.blueAccent[400],
            light: tokens.blueAccent[300]
        },
        text: {
            secondary: tokens.primary[400],
            primary: tokens.primary[500],
            disabled: tokens.primary[300]
        },
        background: {
            default: tokens.background.main,
            paper: tokens.background.paper
        },
        error: {
            main: tokens.redAccent[500]
        }
    },
    typography: {
        fontFamily: 'Geist Variable',
        h1: {
            fontWeight: 600,
            fontSize: '10rem',
            letterSpacing: '-0.8rem',
            lineHeight: 1.06
        },
        h2: {
            fontWeight: 400,
            fontSize: '7rem',
            letterSpacing: '-0.6rem'
        },
        h3: {
            fontWeight: 300,
            fontSize: '4rem',
            letterSpacing: '-0.2rem'
        },
        h4: {
            fontWeight: 500,
            fontSize: '2.75rem',
            letterSpacing: '-0.14rem'
        },
        h5: {
            fontWeight: 500,
            fontSize: '2rem',
            letterSpacing: '-0.07rem'
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '1.4rem',
            letterSpacing: '-0.05rem'
        },
        subtitle2: {
            fontSize: '1rem',
            letterSpacing: '0rem'
        },
        body1: {
            fontSize: '1.2rem',
        }

    },
    components: {
        MuiCssBaseline: {
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    borderRadius: "14px",
                    color: tokens.primary[500],
                    textTransform: 'none',
                    "&:hover": {
                        color: alpha(tokens.greenAccent[500], 0.9)
                    }
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    maxWidth: false,
                    width: "85vw",
                    backgroundColor: alpha(tokens.background.main, 0.9),
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    opacity: '0 !important'
                }
            }
        }
    }
})