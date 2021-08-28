import React from 'react'
import { 
    Typography, 
    Container, 
    TextField ,
    InputAdornment,
    Card,
    CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import CardRestaurant from './CardRestaurant'
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
        width: 500,
        
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
const Etape1 = (props) => {
    const classes = useStyles();
    const [errorRep, setErrorRep] = React.useState(false);
    const [validRep, setValidRep] = React.useState(false);
    const [response, setResponse] = React.useState('');

    const handleChange = (event) => {
        setResponse(event.target.value)
        
    }
    const handleSubmit = (event) => {
        if(response === '24.30' 
        || response === '24,3'
        || response === '24,30'
        || response === '24,3')
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
                <h1>Employé polyvalent en restauration rapide</h1>
                <Container maxWidth="lg" className={classes.align}>
                    <Typography className={classes.paragraph}>
                        Comme beaucoup de jeunes actif je commençai par travailler en restauration rapide, je dois bien
                        admettre que ce domaine professionnel bien que très éloigné de mes valeurs fut au final une
                        expérience intéressante car elle m’a permis de développer mon contact clientèle en travaillant en
                        caisse.
                    </Typography>
                    <h2>L'énigme est donc la suivante</h2>
                    <Typography>
                        Arthur et mathilde souhaite commander 2 menus mega Sunday ainsi qu’un cheeseburger chacun il
                        commande ensemble et dispose d’une carte étudiant. Qu’elle somme devront -ils régler ?
                    </Typography>
                    
                    <div style={{ display:'flex', justifyContent:'center' }}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.titleCard} gutterBottom>
                                    Carte menus :
                                </Typography>
                                <CardRestaurant />
                                {(errorRep) ? <p className={classes.error}>
                                    Indice : pour calculer facilement une réduction de 10% diviser par 10 le résultat initial ou bien d’aller
                                    sur le site du service publique et de faire une simulation de calcul <span role="img" aria-label="smile">😊</span>.
                                </p> : ''}
                                <form hidden={validRep} className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                    <TextField 
                                        error={errorRep}
                                        disabled={validRep}
                                        helperText={(errorRep) ? "Ceci n'est pas la bonne reponse" : ''}
                                        InputProps={{ 
                                            className: classes.input,
                                            endAdornment: <InputAdornment position="end">€</InputAdornment> 
                                        }}  
                                        label="Repondre ici"  
                                        id="custom-css-outlined-input"
                                        onChange={handleChange}
                                    />
                                    <ButtonCustom  submit={true}  label="Valider ma réponse" />
                                </form>
                                {(validRep) ? <p className={classes.succes}>
                                    <b>Bravo la réponse été bien <span>{response}</span> vous pouvez aller a etape suivante <span role="img" aria-label="sparke">✨</span></b>
                                </p> : '' }
                            </CardContent>
                        </Card>
                    </div>
                    
                </Container>
            </Typography>
            <div hidden={!validRep} className={classes.container}>
                <ButtonCustom label="Aller a l'étape suivante" handleClick={props.propsClick} />
            </div>
        </>
        
    )
}

export default Etape1;