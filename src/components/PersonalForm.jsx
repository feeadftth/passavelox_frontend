import { Box, Button, TextField, Autocomplete, createFilterOptions, Select, MenuItem, FormControl, InputLabel, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { listaBelfiore } from '../constants/listaBelfiore'
import { matchSorter } from 'match-sorter';
import dayjs from 'dayjs'
import "dayjs/locale/it"
import { CheckBox } from '@mui/icons-material'

const REGEX_COD_FISCALE = /^[A-Za-z]{6}\d{2}[A-Za-z]{1}\d{2}[A-Za-z]{1}\d{3}[A-Za-z]{1}$/
const comuniSupp = [
    "BOLOGNA",
    "GENOVA",
    "ROMA",
    "MILANO",
    "TORINO"
]

const renderOptions = (props, option) => {
    return (
        <li {...props} key={option.belfiore}>{option.label}</li>
    )
}


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: options => options.label,
    limit: 5,
});


const PersonalForm = ({ paymentId }) => {
    const rendered = useRef(false)

    const [nome, setNome] = useState("")
    const [nomeError, setNomeError] = useState(true)

    const [cognome, setCognome] = useState("")
    const [cognomeError, setCognomeError] = useState(true)

    const [codiceFiscale, setCodiceFiscale] = useState("")
    const [codiceFiscaleError, setCodiceFiscaleError] = useState(true)

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(true)

    const [comuneNascita, setComuneNascita] = useState(null)
    const [comuneNascitaInput, setComuneNascitaInput] = useState(null)

    const [comuneResidenza, setComuneResidenza] = useState(null)
    const [comuneResidenzaError, setcomuneResidenzaError] = useState(true)

    const [dataNascita, setDataNascita] = useState(dayjs())
    const [dataNascitaError, setDataNascitaError] = useState(true)

    const [sesso, setSesso] = useState(0)


    const [generalError, setGeneralError] = useState(true)
    const [saveError, setSaveError] = useState(true)


    useEffect(() => {
        if (rendered.current === true) {
            console.log('RUN')
            if (nomeError || cognomeError || codiceFiscaleError || emailError || comuneResidenzaError) {
                setGeneralError(true)
            } else {
                setGeneralError(false)
            }
        }
        rendered.current = true
    }, [nomeError, cognomeError, codiceFiscaleError, emailError])


    const handleNomeChange = e => {
        setNome(e.target.value)
        if (e.target.validity.valid) {
            setNomeError(false)
        } else {
            setNomeError(true)
        }
    }

    const handleCognomeChange = e => {
        setCognome(e.target.value)
        if (e.target.validity.valid) {
            setCognomeError(false)
        } else {
            setCognomeError(true)
        }
    }

    const handleCodiceFiscaleChange = e => {
        setCodiceFiscale(e.target.value)
        if (REGEX_COD_FISCALE.test(e.target.value)) {
            setCodiceFiscaleError(false)
        } else {
            setCodiceFiscaleError(true)
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
        if (e.target.validity.valid) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }

    const handleComuneNascitaChange = (e, value) => {
        setComuneNascita(value)
    }

    const handleComuneResidenzaChange = e => {
        setComuneResidenza(e.target.value)
    }

    const handleDataNascitaChange = (newDate) => {
        setDataNascita(newDate)
    }

    const handleSessoChange = e => {
        setSesso(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            fetch("http://localhost:5000/intention", {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(async (res) => {
                if (!res.ok) {
                    setCodiceFiscaleError(true)
                    throw new Error('HTTP Status: ' + res.status)
                } else {
                    setSaveError(false)
                }
            })
        } else {
            alert("Ziopera.");
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate display='flex' flexDirection='column' alignContent='center'>
            <Box display='flex' m={2} gap={4}>
                <TextField
                    required
                    label='Nome'
                    value={nome}
                    onChange={handleNomeChange}
                    error={nome !== "" ? nomeError : false}
                    inputProps={{
                        pattern: "[A-Za-z ]+",
                    }}
                    helperText={
                        nome !== "" && nomeError ? "Solo lettere e spazi consentiti" : ""
                    }
                />
                <TextField
                    required
                    label='Cognome'
                    value={cognome}
                    onChange={handleCognomeChange}
                    error={cognome !== "" ? cognomeError : false}
                    inputProps={{
                        pattern: "[A-Za-z ]+",
                    }}
                    helperText={
                        cognome !== "" && cognomeError ? "Solo lettere e spazi consentiti" : ""
                    }
                />
            </Box>
            <Box display='flex' m={2} gap={4}>
                <TextField
                    required
                    label='CodiceFiscale'
                    value={codiceFiscale}
                    onChange={handleCodiceFiscaleChange}
                    error={codiceFiscale !== "" ? codiceFiscaleError : false}
                    helperText={
                        codiceFiscale !== "" && codiceFiscaleError ? "Inserisci un Codice Fiscale valido" : ""
                    }
                />
                <TextField
                    required
                    label='Email'
                    value={email}
                    onChange={handleEmailChange}
                    error={email !== "" ? emailError : false}
                    helperText={
                        email !== "" && emailError ? "Inserisci un indirizzo email valido" : ""
                    }
                />
            </Box>
            <Box display='flex' m={2} gap={4} justifyContent={'center'} sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                <Box sx={{ width: { xs: '100%', s: '40%' } }}>

                    <FormControl fullWidth>
                        <Autocomplete
                            value={comuneNascita}
                            onChange={handleComuneNascitaChange}
                            filterOptions={filterOptions}
                            disablePortal
                            id="ComuneNascita-Selector"
                            options={listaBelfiore}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Comune di Nascita" />}
                            renderOption={renderOptions}
                        />
                    </FormControl>
                </Box>

                <Box sx={{ width: { xs: '100%', s: '40%' } }}>
                    <FormControl fullWidth>
                        <InputLabel id="comune-select">Comune di Residenza</InputLabel>
                        <Select
                            value={comuneResidenza}
                            onChange={handleComuneResidenzaChange}
                            labelId='comune-select'
                            label={"Comune di Residenza"}
                            sx={{ width: '100%' }}
                        >
                            {comuniSupp.map((comune) => {
                                return <MenuItem value={comune}>{comune}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box display='flex' m={2} gap={4}>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='it'>
                        <DatePicker
                            label="Data di Nascita"
                            value={dataNascita}
                            onChange={handleDataNascitaChange} />
                    </LocalizationProvider>
                </Box>
                <Box display={'flex'} sx={{ width: '50%' }} justifyContent={'center'} alignItems={'center'}>
                    <FormControl>
                        <RadioGroup
                            row
                            name="radio-buttons-sesso"
                            value={sesso}
                            onChange={handleSessoChange}
                            sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
                        >
                            <FormControlLabel value={0} control={<Radio />} label="Uomo" />
                            <FormControlLabel value={1} control={<Radio />} label="Donna" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>

            <Box display={'flex'} justifyContent={'center'}>
                <Button type='submit' disabled={generalError}>
                    {sesso}
                </Button>

            </Box>

        </Box >
    )
}

export default PersonalForm