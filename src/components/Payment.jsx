import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Box } from '@mui/material'

import CheckoutStepper from './CheckoutStepper'


const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState("")
    const [paymentId, setPaymentId] = useState("")

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
            var { clientSecret, id } = await res.json();

            setPaymentId(id)
            setClientSecret(clientSecret)
        })
    }, [])

    const props = { stripePromise, clientSecret, paymentId }
    return (
        <Box>
            <CheckoutStepper {...props} />
        </Box>
    )
}

export default Payment