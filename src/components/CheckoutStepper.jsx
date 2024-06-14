import { Box, Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import { useState } from "react";
import StepSwitch from "./StepSwitch";

const steps = ['Informazioni', 'Fatturazione', 'Pagamento']

const CheckoutStepper = (stripeProps) => {


    const [activeStep, setActiveStep] = useState(0)
    const [skipped, setSkipped] = useState(new Set())

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const props = { ...stripeProps, activeStep }

    return (
        <Box mt={2}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <Box p={2} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'} minHeight={'70vh'}>

                <StepSwitch {...props} />

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                    {activeStep !== steps.length - 1 ? (
                        <Button onClick={handleNext}>
                            Next
                        </Button>
                    ) : (
                        null
                    )}
                </Box>
            </Box>
        </Box>
    )

}

export default CheckoutStepper