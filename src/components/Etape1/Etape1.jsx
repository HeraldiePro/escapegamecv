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
    
    root: {
        // minWidth: 275,
        width: 500,
        //textAlign: 'center'
    
    },
    titleCard: {
        fontSize: 22,
        color: colors.violetFoncer,
        fontFamily: 'Adigiana-Toybox-Regular'
    },
    listRoot: {
        flexGrow: 1,
        maxWidth: 752,
    },
    form: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
    },
    notabenne: {
        color: colors.violetClair,
        marginTop: theme.spacing(3),
        
    }
}));
const Etape1 = (props) => {
    const classes = useStyles();
    const [errorRep, setErrorRep] = React.useState(false);
    const [validRep, setValidRep] = React.useState(false);

    const handleChange = (event) => {
        const valueForm = event.target.value
        if(valueForm === '24.3' || valueForm === '24,3')
            {setValidRep(true)
            setErrorRep(false)}
        else
            {setErrorRep(true)
            setValidRep(false)}
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
                                <form className={classes.form} noValidate autoComplete="off">
                                    <TextField 
                                        error={errorRep}
                                        helperText={(errorRep) ? "Ceci n'est pas la bonne reponse" : ''}
                                        InputProps={{ 
                                            className: classes.input,
                                            endAdornment: <InputAdornment position="end">€</InputAdornment> 
                                        }}  
                                        onChange={handleChange}
                                        id="standard-basic" 
                                        label="Repondre ici"   
                                    />
                                </form>
                                <p hidden={!errorRep}>
                                    Indice : pour calculer facilement une réduction de 10% diviser par 10 le résultat initial ou bien d’aller
                                </p>

                                <p hidden={!validRep}>
                                    Bravo vous pouvez aller a etape suivante
                                </p>
                                
                            </CardContent>
                        </Card>
                    </div>
                    
                </Container>
            </Typography>
            { 
                (validRep) ? (
                    <div className={classes.container}>
                        <ButtonCustom label="Aller a l'étape suivante" handleClick={props.propsClick} />
                    </div>
                ): '' 
                
            }
        </>
        
    )
}

export default Etape1;