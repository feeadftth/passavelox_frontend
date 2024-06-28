import PersonalForm from './PersonalForm'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { theme } from '../theme/themes'
import { Typography } from '@mui/material'

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


const StepSwitch = ({ activeStep, paymentId, stripePromise, clientSecret }) => {


    switch (activeStep) {
        case 0:
            return <PersonalForm paymentId={paymentId} />;
        case 1:
            return (<Typography variant='h1'>
                Geolier Cafardo
            </Typography>)
        case 2:
            return (
                <>
                    {stripePromise && clientSecret && (
                        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                            <CheckoutForm />
                        </Elements>
                    )}
                </>
            )
    }
}

export default StepSwitch