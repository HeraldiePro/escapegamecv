import React from 'react'
import { 
    Typography, 
    Container, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../../theme/Button'

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
}));
const Etape2 = (props) => {
    console.log('TIT')
    const classes = useStyles();
    // const [errorRep, setErrorRep] = React.useState(false);
    // const [validRep, setValidRep] = React.useState(false);

    // const handleChange = (event) => {
    //     const valueForm = event.target.value
    //     if(valueForm === '24.3' || valueForm === '24,3')
    //         {setValidRep(true)
    //         setErrorRep(false)}
    //     else
    //         {setErrorRep(true)
    //         setValidRep(false)}
    // }
    
    return (
        <>
            <Typography className={classes.instructions}>
                <h1 data-testid="Etape2Title">Etape numero 2</h1>
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
                </Container>
            </Typography>
            <div hidden={true} className={classes.container}>
                <ButtonCustom label="Aller a l'étape suivante" handleClick={props.propsClick} />
            </div>
        </>
        
    )
}

export default Etape2;