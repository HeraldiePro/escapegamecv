import React from 'react'
import ContainerEtape from '../../theme/ContainerEtape'
import etape5img from '../../assets/images/etape5/etape5.png'

const ContainEtape5 = () => {
    return (
        <>
            <img src={etape5img} alt="Text" />
        </>
    )
}

const title = "Extra pour 221 b"
const response = "merci"

const propsEtape = `Afin de me perfectionner j’ai choisi de participer à une formation à l’afpa de tours nord en tant
qu’animateur en tourisme et loisir. Et c’est par ce biais que j’ai découvert l’univers de l’escape game
j’ai donc procédé à un stage de 3 mois en entreprise, stage qui à été rémunéré au vus du travail que
j’ai fourni durant une période de forte affluence.`

const propsIndice = `les chiffres entre parenthèse donne des coordonnées exemple (la première li.. le onzième M.. la première L…)`

const enigme = `En usant de l’extrait et des chiffres entre parenthèse constituez un mot de 5
lettres.`

const Etape5 = ({propsClick}) => {
    return (<ContainerEtape 
        etapeComponent={<ContainEtape5 />}
        title={title}
        grandCard = {true}
        paraph={[propsEtape]}  
        reponse = {response}
        enigme={enigme}
        indice={propsIndice}
        nextStep={propsClick} />
    )
}

export default Etape5;