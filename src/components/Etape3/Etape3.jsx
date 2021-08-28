import React from 'react'
import { 
    Typography, 
    Container, 
    Paper,
    TextField,
    ListItem,
    ListItemIcon,
    ListItemText,
    List,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../../theme/Button'
import { colors } from '../../theme/variables';
import SvgIcon from '@material-ui/core/SvgIcon';

function RunIconIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
      </SvgIcon>
    );
}

const listEnigme = ['Prestidigitation', 'Théâtre', 'Sport', 'Dance']
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
const Etape3 = (props) => {
    const classes = useStyles();
    const [errorRep, setErrorRep] = React.useState(false);
    const [validRep, setValidRep] = React.useState(false);
    const [response, setResponse] = React.useState('');
    
    const handleChange = (event) => {
        setResponse(event.target.value)   
    }
    
    const handleSubmit = (event) => {

        if(response.toLowerCase() === 'sport')
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
                <h1 style={{paddingTop: 15 }} data-testid="Etape3Title">Animation village vacances</h1>
                <Container maxWidth="lg" className={classes.align}>
                    <Typography className={classes.paragraph}>
                        De fil en aiguille j’ai souhaité expérimenter d’animer des public dans des structures différentes avec
                        des public plus varié, j’ai donc eu la chance de travailler en saison pour un village vacance 4 étoile
                        situé sur la côte d’azur du nom très rigolo de TourisTra.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Au cours de cette expérience j’ai eu l’occasion de mettre à profit mes compétences en théâtre en
                        montant sur scène (et parfois même de faire du travestie hihi) d’apprendre des rudiments de
                        prestidigitation, d’improviser un jeu de piste avec pour élément principal une bobine de laine et aussi
                        d’apprendre des chorégraphie (pour mon plus grand plaisir) pour des animations avec les enfants qui
                        avait lieu 5 jours sur 7 (le principe de mini si vous connaissez).
                    </Typography>
                    <h2>L'énigme est donc la suivante</h2>
                    <Typography style={{fontSize: 18}}>
                        Veuillez trouver parmi la liste ci-dessous et en vous aidant du texte ci-dessus l’intrus dans cette liste d’activités. 
                    </Typography>
                    <Paper className={classes.contentForm} elevation={2} >
                        {(errorRep) ? <p data-testid="textErrorEtape3" className={classes.error}>
                            Indice :  <span role="img" aria-label="smile">😊</span>.
                        </p> : ''}
                        <List>
                        {listEnigme.map((element) => 
                            <ListItem key={element}>
                                <ListItemIcon>
                                    <RunIconIcon style={{ color: colors.rose }}/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={<Typography variant="h6" style={{ color: colors.violetClair }}>{ element }</Typography>}
                                />
                            </ListItem>)}
                        </List>
                        <form hidden={validRep} className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField 
                                data-testid="inputEtape3"
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

export default Etape3;