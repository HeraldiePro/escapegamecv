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
        width: 600,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 10
    },
}));
const Etape2 = (props) => {
    const classes = useStyles();
    const [errorRep, setErrorRep] = React.useState(false);
    const [validRep, setValidRep] = React.useState(false);
    const [response, setResponse] = React.useState('');
    
    const handleChange = (event) => {
        setResponse(event.target.value)   
    }
    
    const handleSubmit = (event) => {

        if(response.toLowerCase() === 'pédagogie' 
        || response.toLowerCase() === 'pedagogie' )
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
                <h1 data-testid="Etape2Title">Animation enfant</h1>
                <Container maxWidth="lg" className={classes.align}>
                    <Typography className={classes.paragraph}>
                        Suite à une reconversion professionnel je décidâmes ensuite de m’orienter vers l’animation jeune
                        public, pour ce faire j’ai fait le parcours classique du BAFA et direct après son acquisition j’ai pu
                        commencer à travailler pour une association pour les temps de périscolaire. J’avais d’ailleurs déjà à
                        cœur de masteriser et d’initier mon public à différents jeux de société et/ou de stratégie.
                    </Typography>
                    <h2>L'énigme est donc la suivante</h2>
                    <Typography style={{fontSize: 18}}>
                        Décrifrer le rébu suivant : Ajouter liste des images 
                    </Typography>
                    <Paper className={classes.contentForm} elevation={2} >
                        {(errorRep) ? <p data-testid="textErrorEtape2" className={classes.error}>
                            Indice : le personnage dessinée est russe et pour le plateau il s’agit célèbre jeux de stratégie coréen. <span role="img" aria-label="smile">😊</span>.
                        </p> : ''}
                        <form hidden={validRep} className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField 
                                data-testid="inputEtape1"
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
                            <ButtonCustom dataTestid="SubmitEtape2" submit={true}  label="Valider ma réponse" />
                        </form>
                        {(validRep) ? <p data-testid="succesTextEtape2" className={classes.succes}>
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

export default Etape2;