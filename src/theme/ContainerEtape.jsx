import React from 'react'
import { 
    Container, 
    Card,
    CardContent,
    TextField,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from './Button'
import { colors } from './variables';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '60px',
        paddingTop: '53px'
    },
    paragraph: {
        fontSize: '18px',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(5),
    },
    align: {
        textAlign: 'left'
    },
    containerCard: {
        textAlign: 'center'
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
    container: {
        '& > *': {
            margin: theme.spacing(1),
            marginBottom: theme.spacing(3),
          }, 
    },
    input: {
        marginRight:  theme.spacing(3),
    },
    root: {
        marginTop: 15,
        width: 500,
        
    },
    grand: {
        marginTop: 15,
        with: 800,
        minWidth: 300
    },
    titleCard: {
        fontSize: 22,
        color: colors.violetFoncer,
        fontFamily: 'Adigiana-Toybox-Regular'
    },
    form: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
    },
    succes: {
        color: colors.marron,
        "& span": {
            color: colors.tuquoise
        }
    },
    notabenne: {
        color: colors.violetClair,
        marginTop: theme.spacing(3),
        
    },
    error: {
        color: colors.orange,
        fontSize: '14px'
    }
}));

const ContainerEtape = ({
    etapeComponent = '',
    title ='', 
    paraph = [''], 
    reponse='', 
    haveMask = false,
    enigme='', 
    indice='',
    nextStep,
    grandCard = false
 }) => {
    const classes = useStyles();
    const [errorRep, setErrorRep] = React.useState(false);
    const [validRep, setValidRep] = React.useState(false);
    const [response, setResponse] = React.useState('');
    const [countRep, setCountRep] = React.useState(0);

    const handleChange = (event) => {
        setResponse(event.target.value)   
    }
    
    const handleSubmit = (event) => {
        setCountRep(countRep + 1)
        
        if(response.toLowerCase() === reponse 
        || response.replace(',', '.') === reponse )
        {
            setValidRep(true)
            setErrorRep(false)
        }
        else
        {
            setErrorRep(true)
            setValidRep(false)
           
        }
        event.preventDefault();
    }
    console.log('{grandCard}',grandCard)
    return (
        <>
            <div className={classes.instructions}>
                <h1 data-testid="Title">{title}</h1>
                <Container maxWidth="lg" className={classes.align}> 
                    { 
                        paraph.map((paraph) => 
                            <p key={paraph} data-testid="p1" className={classes.paragraph} >
                                {paraph}
                            </p>
                        )      
                    }
                    <h2 data-testid="h2">L'énigme est donc la suivante</h2>
                    <p style={{fontSize: 18}} data-testid="enoncer">
                        {enigme}
                    </p>
                    <div style={{ display:'flex', justifyContent:'center' }}>
                        <Card className={(grandCard) ? classes.grand : classes.root}>
                            <CardContent data-testid="ContentCard">
                                {(errorRep && countRep > 3) ? <p data-testid="textError" className={classes.error}>
                                    Indice : {indice} <span role="img" aria-label="smile">😊</span>.
                                </p> : ''}
                                {
                                    etapeComponent
                                }
                                <form hidden={validRep} className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                        {
                                            (haveMask) ? '' 
                                            : <TextField 
                                                data-testid="input"
                                                error={errorRep}
                                                disabled={validRep}
                                                helperText={(errorRep) ? "Ceci n'est pas la bonne reponse" : ''}
                                                InputProps={{ 
                                                    className: classes.input,
                                                }}  
                                                label="Repondre ici"  
                                                id="custom-css-outlined-input"
                                                onChange={handleChange}
                                            />
                                        }
                                    <ButtonCustom dataTestid="Submit" submit={true}  label="Valider ma réponse" />
                                </form>
                                {(validRep) ? <p data-testid="succes" className={classes.succes}>
                                    <b>Bravo la réponse été bien <span>{response}</span> vous pouvez aller a etape suivante <span role="img" aria-label="sparke">✨</span></b>
                                </p> : '' }
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
            <div hidden={!validRep} className={classes.container}>
                <ButtonCustom dataTestid="NextStep" label="Aller a l'étape suivante" handleClick={nextStep} />
            </div>
        </>  
    )
}

export default ContainerEtape