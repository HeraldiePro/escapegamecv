import React from 'react'
import ContainerEtape from '../../theme/ContainerEtape'
import rebut from '../../assets/images/rebut/rebut.jpg'

const Etape2Contain = () => {
    return <img src={rebut} alt="rebut" />
}
const title = "Animation enfant"
const response = "pédagogie"
const propsEtape = `Suite à une reconversion professionnel je décidâmes ensuite de m’orienter vers l’animation jeune
public, pour ce faire j’ai fait le parcours classique du BAFA et direct après son acquisition j’ai pu
commencer à travailler pour une association pour les temps de périscolaire. J’avais d’ailleurs déjà à
cœur de masteriser et d’initier mon public à différents jeux de société et/ou de stratégie.`

const propsEnigme = `Décrifrer le rébu suivant : Ajouter liste des images `

const propsIndice = `le personnage dessinée est russe et pour le plateau il s’agit célèbre jeux de stratégie coréen.`

const Etape2 = ({propsClick}) => {
    return <ContainerEtape 
    etapeComponent={<Etape2Contain />}
    title={title}
    paraph={[propsEtape]}  
    reponse = {response}
    enigme={propsEnigme}
    indice={propsIndice}
    nextStep={propsClick}
    grandCard = {true}
 />
}

export default Etape2;