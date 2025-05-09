import { Container, Stepper } from '@mui/material';
import React from 'react';

interface IStepWrapperProps {
    activeStep: number;
}

const StepWrapper: React.FC<IStepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep} alternativeLabel>


            </Stepper>
        </Container>
    );
};

export default StepWrapper;