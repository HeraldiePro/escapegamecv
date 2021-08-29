import React from 'react'
import { 
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ContainerEtape from '../../theme/ContainerEtape'

const useStyles = makeStyles((theme) => ({
    typo: {
        fontSize: 49
    }
}));

const ContainEtape5 = () => {
    const classes = useStyles();
    return (
        <>
            <i>Harry potter à l’école des sorcier chapitre 7.</i>
            <Typography className={classes.typo}>(1.11.1)(2.2.1)(6.1.2)(8.7.1)(9.6.1)</Typography>
        </>
    )
}

const title = "Extra pour 221 b"
const response = "merci"

const propsEtape = `Afin de me perfectionner j’ai choisi de participer à une formation à l’afpa de tours nord en tant
qu’animateur en tourisme et loisir. Et c’est par ce biais que j’ai découvert l’univers de l’escape game
j’ai donc procédé à un stage de 3 mois en entreprise, stage qui à été rémunéré au vus du travail que
j’ai fourni durant une période de forte affluence.`

const propsEnigme = `« Le hall d'entrée du château était si grand que la maison des Dursley aurait pu y tenir toute
entière et le plafond si haut qu'on arrivait pas à l'apercevoir. Des torches enflammées étaient
fixées aux murs de pierre, comme à Gringotts, et un somptueux escalier de marbre
permettait de monter dans les étages. Guidés par le professeur McGonagall, ils traversèrent
l'immense salle au sol dallé et entrèrent dans une petite salle réservée aux élèves de
première année. Harry entendait la rumeur de centaines de voix qui lui parvenaient à travers
une porte située sur sa droite. Les autres élèves devaient déjà être là. L'exiguïté des lieux les
obligea à se serrer les uns contre les autres et ils restèrent debout en silence, lançant autour
d'eux des regards un peu inquiets. »`

const propsIndice = `il s’agit de coordonnées dans le texte afin de trouver un mot en 5 lettre. `

const Etape5 = ({propsClick}) => {
    return (<ContainerEtape 
        etapeComponent={<ContainEtape5 />}
        title={title}
        grandCard = {true}
        paraph={[propsEtape]}  
        reponse = {response}
        enigme={propsEnigme}
        indice={propsIndice}
        nextStep={propsClick} />
    )
}

export default Etape5;