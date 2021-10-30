import React from 'react'
import ContainerEtape from '../../theme/ContainerEtape'
import etape5img from '../../assets/images/etape5/etape5.png'
import { makeStyles } from '@material-ui/core/styles'
import { Etape5Text } from '../../theme/TextElement'


const useStyles = makeStyles(() => ({
    img: {
        'max-width': '800px',
        'min-width': '300px'
    }
}));
const ContainEtape5 = () => {
    const classes = useStyles();
    return (
        <>
            <img src={etape5img} alt="Text" className={classes.img} />
        </>
    )
}

const response = "merci"


const Etape5 = ({propsClick}) => {
    return (<ContainerEtape 
        etapeComponent={<ContainEtape5 />}
        title={Etape5Text.title}
        grandCard = {true}
        paraph={[Etape5Text.description]}  
        reponse = {response}
        enigme={Etape5Text.enigme}
        indice={Etape5Text.indice}
        nextStep={propsClick} />
    )
}

export default Etape5;