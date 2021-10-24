import React from 'react'
import { 
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import CardRestaurant from './CardRestaurant'
import ContainerEtape from '../../../theme/ContainerEtape'
import { colors } from '../../../theme/variables';

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
const title = "Employé polyvalent en restauration rapide"
const response = "24.3"
const propsEtape = `Comme beaucoup de jeunes actif je commençai par travailler en restauration rapide, je dois bien
admettre que ce domaine professionnel bien que très éloigné de mes valeurs fut au final une
expérience intéressante car elle m’a permis de développer mon contact clientèle en travaillant en
caisse.`

const propsEnigme = `Arthur et mathilde souhaite commander 2 menus mega Sunday ainsi
qu’un cheeseburger chacun ils commande, règle ensemble et dispose
d’une carte étudiant. Qu’elle somme devront -ils régler ?`

const propsIndice = `pour calculer facilement une réduction de 10% diviser par 10 le résultat initial ou bien d’aller
sur le site du service publique et de faire une simulation de calcul`

const Etape1 = ({propsClick}) => {
    
    return (<ContainerEtape 
        etapeComponent={<Etape1Content />}
        title={title}
        paraph={[propsEtape]}  
        reponse = {response}
        enigme={propsEnigme}
        indice={propsIndice}
        nextStep={propsClick}
     />)
}

export default Etape1;