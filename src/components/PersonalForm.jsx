import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const REGEX_COD_FISCALE = /^[A-Za-z]{6}\d{2}[A-Za-z]{1}\d{2}[A-Za-z]{1}\d{3}[A-Za-z]{1}$/

const PersonalForm = ({ paymentId }) => {

    const [nome, setNome] = useState("")
    const [nomeError, setNomeError] = useState(false)

    const [cognome, setCognome] = useState("")
    const [cognomeError, setCognomeError] = useState(false)

    const [codiceFiscale, setCodiceFiscale] = useState("")
    const [codiceFiscaleError, setCodiceFiscaleError] = useState(false)

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)

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

    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            alert("SIUUUUU");
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
                    error={nomeError}
                    inputProps={{
                        pattern: "[A-Za-z ]+",
                    }}
                    helperText={
                        nomeError ? "Solo lettere e spazi consentiti" : ""
                    }
                />
                <TextField
                    required
                    label='Cognome'
                    value={cognome}
                    onChange={handleCognomeChange}
                    error={cognomeError}
                    inputProps={{
                        pattern: "[A-Za-z ]+",
                    }}
                    helperText={
                        cognomeError ? "Solo lettere e spazi consentiti" : ""
                    }
                />
            </Box>
            <Box display='flex' m={2} gap={4}>
                <TextField
                    required
                    label='CodiceFiscale'
                    value={codiceFiscale}
                    onChange={handleCodiceFiscaleChange}
                    error={codiceFiscaleError}
                    helperText={
                        codiceFiscaleError ? "Inserisci un Codice Fiscale valido" : ""
                    }
                />

                <TextField
                    required
                    label='Email'
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    inputProps={{
                        type: "email",
                    }}
                    helperText={
                        emailError ? "Inserisci un'indirizzo email valido" : ""
                    }
                />

            </Box>
            <Box>
                <Button type='submit'>
                    Salva
                </Button>

            </Box>

        </Box>
    )
}

export default PersonalForm