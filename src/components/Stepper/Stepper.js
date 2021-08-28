import React from 'react'
import { makeStyles} from '@material-ui/core/styles'

import {
  Stepper,
  Step,
  StepLabel,
  Typography
} from '@material-ui/core'

import Etape1 from '../Etape1/Etape1'
import ButtonCustom from '../../theme/Button'
import { QontoConnector, QontoStepIcon} from './StyleStepper'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    container: {
        '& > *': {
            margin: theme.spacing(1),
          }, 
    }
    }));

const getSteps = () => {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

const getStepContent = (step) => {
    switch (step) {
        case 0:
        return <Etape1 />;
        case 1:
        return 'What is an ad group anyways?';
        case 2:
        return 'This is the bit I really care about!';
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

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            Mettre ici les remerciments 
                        </Typography>
                        <ButtonCustom label="Reset les etapes" handleClick={handleReset} />
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className={classes.container}>
                            {(activeStep > 0) ? <ButtonCustom label="Retourner à l'étape précédente" handleClick={handleBack} typeButton='secondary'/> :  ''}
                            <ButtonCustom label="Aller à l'étape suivante" handleClick={handleNext} />
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default StepperContent