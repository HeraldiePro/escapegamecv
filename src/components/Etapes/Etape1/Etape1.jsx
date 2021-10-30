import React from 'react'
import { 
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import CardRestaurant from './CardRestaurant'
import ContainerEtape from '../../../theme/ContainerEtape'
import { colors } from '../../../theme/variables';
import { Etape1Text } from '../../../theme/TextElement'

const useStyles = makeStyles(() => ({
    titleCard: {
        fontSize: 22,
        color: colors.violetFoncer,
        fontFamily: 'Adigiana-Toybox-Regular'
    }
}));
const Etape1Content = () => {
    const classes = useStyles();
    return (<>
        <Typography className={classes.titleCard} gutterBottom>
            Carte menus :
        </Typography>
        <CardRestaurant />
    </>)
}

const response = "24.3"


const response = "24.3"

const Etape1 = ({propsClick}) => {
    
    return (<ContainerEtape 
        etapeComponent={<Etape1Content />}
        title={Etape1Text.title}
        paraph={[Etape1Text.description]}  
        reponse = {response}
        enigme={Etape1Text.enigme}
        indice={Etape1Text.indice}
        nextStep={propsClick}
     />)
}

export default Etape1;