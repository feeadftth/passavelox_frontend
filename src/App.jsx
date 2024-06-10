import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import { theme } from './theme/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Mission from './components/Mission'
import Faq from './components/Faq'
import Contatti from './components/Contatti'
import Typo from './components/Test/Typo'
import Payment from './components/Payment'
import { Helmet } from 'react-helmet-async'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
        </Helmet>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='mission' element={<Mission />} />
            <Route path='faq' element={<Faq />} />
            <Route path='contatti' element={<Contatti />} />
            <Route path='payment' element={<Payment />} />

            {/* TESTING DELETE WHEN PRODUCTION */}
            <Route path='typo' element={<Typo />} />

          </Route>
        </Routes>

      </ThemeProvider>
    </>
  )
}

export default App
