import React from 'react'
import { 
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import alphabetMorse from '../../assets/images/morse.jpg'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ContainerEtape from '../../theme/ContainerEtape'
import { Etape4Text } from '../../theme/TextElement'

const useStyles = makeStyles(() => ({
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

const response = "escape yourself"

const Etape4 = ({propsClick}) => {
    return (<ContainerEtape 
        etapeComponent={<Etape4Contain />}
        title={Etape4Text.title}
        grandCard = {true}
        paraph={[Etape4Text.description]}  
        reponse = {response}
        enigme={Etape4Text.enigme}
        indice={Etape4Text.indice}
        nextStep={propsClick} />
    )
}

export default Etape4;