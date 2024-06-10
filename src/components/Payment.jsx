import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { theme } from '../theme/themes'
import { Box } from '@mui/material'

const colors = theme.palette

const appearance = {
    theme: 'stripe',

    variables: {
        colorPrimary: colors.primary.main,
        colorBackground: '#ffffff',
        colorText: colors.text.primary,
        colorDanger: colors.error.main,
        fontFamily: 'Geist Variable',
        spacingUnit: '5px',
        borderRadius: '4px',
    }
};


const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        fetch("http://localhost:5000/payment").then(async (res) => {
            const { publicKey } = await res.json();

            setStripePromise(loadStripe(publicKey))
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/payment", {
            method: "POST",
            body: JSON.stringify({}),
        }).then(async (res) => {
            var { clientSecret } = await res.json();

            setClientSecret(clientSecret)
        })
    }, [])
    return (
        <Box>
            {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                    <CheckoutForm />
                </Elements>
            )}
        </Box>
    )
}

export default Payment