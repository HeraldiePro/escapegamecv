import React from 'react'
import { 
    Typography, 
    Container, 
    Paper,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../../theme/Button'
import { colors } from '../../theme/variables';


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
    form: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
    },
    input: {
        marginRight:  theme.spacing(3),
    },
    succes: {
        color: colors.marron,
        "& span": {
            color: colors.tuquoise
        }
    },
    error: {
        color: colors.orange,
        fontSize: '14px'
    },
    contentForm: {
        marginTop: theme.spacing(3),
        minheight: 200,
        width: 850,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 10
    },
    typo: {
        fontSize: 49
    }
}));
const Etape5 = (props) => {
    const classes = useStyles();
    const [errorRep, setErrorRep] = React.useState(false);
    const [validRep, setValidRep] = React.useState(false);
    const [response, setResponse] = React.useState('');
    
    const handleChange = (event) => {
        setResponse(event.target.value)   
    }
    
    const handleSubmit = (event) => {

        if(response.toLowerCase() === 'merci')
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
    
    return (
        <>
            <Typography className={classes.instructions}>
                <h1 style={{paddingTop: 15 }} data-testid="Etape3Title">Extra pour 221 b</h1>
                <Container maxWidth="lg" className={classes.align}>
                    <Typography className={classes.paragraph}>
                        Et c’est très récemment que j’ai découvert le milieu du grand jeux urbain itinérant. Par le biais d’un
                        CDD de 3 mois pour une entreprise dijonnaise qui proposait comme service
                    </Typography>
                    <h2>L'énigme est donc la suivante</h2>
                    <Typography style={{fontSize: 18}}>
                        « Le hall d'entrée du château était si grand que la maison des Dursley aurait pu y tenir toute
                        entière et le plafond si haut qu'on arrivait pas à l'apercevoir. Des torches enflammées étaient
                        fixées aux murs de pierre, comme à Gringotts, et un somptueux escalier de marbre
                        permettait de monter dans les étages. Guidés par le professeur McGonagall, ils traversèrent
                        l'immense salle au sol dallé et entrèrent dans une petite salle réservée aux élèves de
                        première année. Harry entendait la rumeur de centaines de voix qui lui parvenaient à travers
                        une porte située sur sa droite. Les autres élèves devaient déjà être là. L'exiguïté des lieux les
                        obligea à se serrer les uns contre les autres et ils restèrent debout en silence, lançant autour
                        d'eux des regards un peu inquiets. »
                        <i>Harry potter à l’école des sorcier chapitre 7.</i>
                    </Typography>
                    <Paper className={classes.contentForm} elevation={2} >
                        {(errorRep) ? <p data-testid="textErrorEtape3" className={classes.error}>
                            Indice : il s’agit de coordonnées dans le texte afin de trouver un mot en 5 lettre. <span role="img" aria-label="smile">😊</span>.
                        </p> : ''}
                        <Typography className={classes.typo}>(1.11.1)(2.2.1)(6.1.2)(8.7.1)(9.6.1)</Typography>
                        <form hidden={validRep} className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField 
                                data-testid="inputEtape5"
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
                            <ButtonCustom dataTestid="SubmitEtape3" submit={true}  label="Valider ma réponse" />
                        </form>
                        {(validRep) ? <p data-testid="succesTextEtape3" className={classes.succes}>
                            <b>Bravo la réponse été bien <span>{response}</span> vous pouvez aller a etape suivante <span role="img" aria-label="sparke">✨</span></b>
                        </p> : '' }
                    </Paper>
                        
                </Container>
            </Typography>
            <div hidden={!validRep} className={classes.container}>
                <ButtonCustom dataTestid="NextStep" label="Aller a l'étape suivante" handleClick={props.propsClick} />
            </div>
        </>
        
    )
}

export default Etape5;