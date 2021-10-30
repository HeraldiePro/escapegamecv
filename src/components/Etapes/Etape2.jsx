import React from 'react'
import ContainerEtape from '../../theme/ContainerEtape'
import rebut from '../../assets/images/rebut/rebut.jpg'
import { Etape2Text } from '../../theme/TextElement'


const Etape2Contain = () => {
    return <img src={rebut} alt="rebut" />
}

const response = "pédagogie"


const Etape2 = ({propsClick}) => {
    return <ContainerEtape 
    etapeComponent={<Etape2Contain />}
    title={Etape2Text.title}
    paraph={[Etape2Text.description]}  
    reponse = {response}
    enigme={Etape2Text.enigme}
    indice={Etape2Text.indice}
    nextStep={propsClick}
    grandCard = {true}
 />
}

export default Etape2;