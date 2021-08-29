import React from 'react'
import { 
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import alphabetMorse from '../../assets/images/morse.jpg'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ContainerEtape from '../../theme/ContainerEtape'

const useStyles = makeStyles((theme) => ({
    morse: {
        fontSize: 49
    }
}));

const Etape4Contain = () => {
    const classes = useStyles();
    return (
        <>
            <img src={alphabetMorse}  alt="alphabetMorse" />
            <Typography variant="h3" className={classes.morse}>
                <FiberManualRecordIcon /> / <FiberManualRecordIcon /><FiberManualRecordIcon /><FiberManualRecordIcon /> / -<FiberManualRecordIcon />-<FiberManualRecordIcon /> / <FiberManualRecordIcon />- / <FiberManualRecordIcon />--<FiberManualRecordIcon /> / 
            </Typography>
            <hr />
            <Typography variant="h3" className={classes.morse}>
            -<FiberManualRecordIcon />-- / --- / <FiberManualRecordIcon /><FiberManualRecordIcon />- / <FiberManualRecordIcon />-<FiberManualRecordIcon /> / <FiberManualRecordIcon /><FiberManualRecordIcon /><FiberManualRecordIcon /> <FiberManualRecordIcon /> / <FiberManualRecordIcon />-<FiberManualRecordIcon /><FiberManualRecordIcon /> / <FiberManualRecordIcon /><FiberManualRecordIcon />-<FiberManualRecordIcon />
            </Typography>
        </>
    )
}

const title = "Formation ATL et stage en escape game"
const response = "escape yourself"

const propsEtape = `Afin de me perfectionner j’ai choisi de participer à une formation à l’afpa de tours nord en tant
qu’animateur en tourisme et loisir. Et c’est par ce biais que j’ai découvert l’univers de l’escape game
j’ai donc procédé à un stage de 3 mois en entreprise, stage qui à été rémunéré au vus du travail que
j’ai fourni durant une période de forte affluence.`

const propsEnigme = `Trouver les 2 mots (un par ligne) afin d'obtenir le code secret  `

const propsIndice = `Il s’agit d’un code en morse`


const Etape4 = ({propsClick}) => {
    return (<ContainerEtape 
        etapeComponent={<Etape4Contain />}
        title={title}
        grandCard = {true}
        paraph={[propsEtape]}  
        reponse = {response}
        enigme={propsEnigme}
        indice={propsIndice}
        nextStep={propsClick} />
    )
}

export default Etape4;