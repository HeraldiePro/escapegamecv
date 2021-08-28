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
import alphabetMorse from '../../assets/images/morse.jpg'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


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
    morse: {
        fontSize: 49
    }
}));
const Etape4 = (props) => {
    const classes = useStyles();
    const [errorRep, setErrorRep] = React.useState(false);
    const [validRep, setValidRep] = React.useState(false);
    const [response, setResponse] = React.useState('');
    
    const handleChange = (event) => {
        setResponse(event.target.value)   
    }
    
    const handleSubmit = (event) => {

        if(response.toLowerCase() === 'escape yourself')
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
                <h1 style={{paddingTop: 15 }} data-testid="Etape3Title">Formation ATL et stage en escape game</h1>
                <Container maxWidth="lg" className={classes.align}>
                    <Typography className={classes.paragraph}>
                        Afin de me perfectionner j’ai choisi de participer à une formation à l’afpa de tours nord en tant
                        qu’animateur en tourisme et loisir. Et c’est par ce biais que j’ai découvert l’univers de l’escape game
                        j’ai donc procédé à un stage de 3 mois en entreprise, stage qui à été rémunéré au vus du travail que
                        j’ai fourni durant une période de forte affluence.
                    </Typography>
                    <h2>L'énigme est donc la suivante</h2>
                    <Typography style={{fontSize: 18}}>
                        Trouver les 2 mots (un par ligne) afin d'obtenir le code secret 
                    </Typography>
                    <Paper className={classes.contentForm} elevation={2} >
                        {(errorRep) ? <p data-testid="textErrorEtape3" className={classes.error}>
                            Indice : Indice : Il s’agit d’un code en morse <span role="img" aria-label="smile">😊</span>.
                        </p> : ''}
                        <Typography variant="h3" className={classes.morse}>
                            <FiberManualRecordIcon /> / <FiberManualRecordIcon /><FiberManualRecordIcon /><FiberManualRecordIcon /> / -<FiberManualRecordIcon />-<FiberManualRecordIcon /> / <FiberManualRecordIcon />- / <FiberManualRecordIcon />--<FiberManualRecordIcon /> / 
                        </Typography>
                        <Typography variant="h3" className={classes.morse}>
                        -<FiberManualRecordIcon />-- / --- / <FiberManualRecordIcon /><FiberManualRecordIcon />- / <FiberManualRecordIcon />-<FiberManualRecordIcon /> / <FiberManualRecordIcon /><FiberManualRecordIcon /><FiberManualRecordIcon /> <FiberManualRecordIcon /> / <FiberManualRecordIcon />-<FiberManualRecordIcon /><FiberManualRecordIcon /> / <FiberManualRecordIcon /><FiberManualRecordIcon />-<FiberManualRecordIcon />
                        </Typography>
                        <img src={alphabetMorse}  alt="alphabetMorse" />
                        <form hidden={validRep} className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField 
                                multiline
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

export default Etape4;