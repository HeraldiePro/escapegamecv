import React from 'react'
import { makeStyles} from '@material-ui/core/styles'

import {
  Stepper,
  Step,
  StepLabel
} from '@material-ui/core'

import Etape1 from '../Etape1/Etape1'
import Etape2 from '../Etape2/Etape2'
import Etape3 from '../Etape3/Etape3'
import Etape4 from '../Etape4/Etape4'
import Etape5 from '../Etape5/Etape5'
import Remerciment from '../Remerciments/Remerciment'
import { QontoConnector, QontoStepIcon} from './StyleStepper'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: 'transparent'
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    
    }));

const getSteps = () => {
    return ['etape1', 'etape2', 'etape3', 'etape4', 'etape 5'];
}

const getStepContent = (step, propsClick) => {
    switch (step) {
        case 0:
        return <Etape1 propsClick={propsClick} />;
        case 1:
        return <Etape2 propsClick={propsClick} />;
        case 2:
        return <Etape3 propsClick={propsClick} />;
        case 3:
        return <Etape4 propsClick={propsClick} />;
        case 4:
        return <Etape5 propsClick={propsClick} />;
        case 5:
        return <Remerciment />;
        default:
        return 'Unknown step';
    }
}

const StepperContent = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    return (
        <>
            <div className={`force-blanc ${classes.root}`}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    
                </div>
            </div>
            <div data-testid="ContentStepper" className={`content etape-${activeStep + 1}`}>
                <div className="container-step">
                    {getStepContent(activeStep, handleNext)}
                </div>
            </div>
            
        </>
    )
}

export default StepperContent