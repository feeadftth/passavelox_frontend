import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { PaymentElement } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [message, setMessage] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/home`,
            }
        })

        if (error?.type === "card_error" || error?.type === "validation_error") {
            setMessage(error.message)
        } else {
            setMessage("Unexpected error.")
        }


        setIsProcessing(false)
    }


    return (
        <>
            <PaymentElement />
            <Button disabled={isProcessing} onClick={handleSubmit}>
                {isProcessing ? "Sto facenn..." : "Ziopera"}
            </Button>
            {message && (
                <Typography>
                    {message}
                </Typography>
            )}
        </>
    )
}

export default CheckoutForm