import React from 'react'
import { 
    ListItem,
    ListItemIcon,
    ListItemText,
    List,
    Typography
} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import ContainerEtape from '../../theme/ContainerEtape'
import { colors } from '../../theme/variables';
function RunIconIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
      </SvgIcon>
    );
}

const listEnigme = ['Prestidigitation', 'Théâtre', 'Sport', 'Dance']

const ContainEtape3 = () => {
    return (
        <List>
        {
            listEnigme.map((element) => 
            <ListItem key={element}>
                <ListItemIcon>
                    <RunIconIcon style={{ color: colors.rose }}/>
                </ListItemIcon>
                <ListItemText
                    primary={<Typography variant="h6" style={{ color: colors.violetClair }}>{ element }</Typography>}
                />
            </ListItem>)
        }
        </List>
    )
}

const title = "Animation village vacances"
const response = "sport"
const propsEtape = `De fil en aiguille j’ai souhaité expérimenter d’animer des public dans des structures différentes avec
des public plus varié, j’ai donc eu la chance de travailler en saison pour un village vacance 4 étoile
situé sur la côte d’azur du nom très rigolo de TourisTra.`

const propsEtape2 = `Au cours de cette expérience j’ai eu l’occasion de mettre à profit mes compétences en théâtre en
montant sur scène (et parfois même de faire du travestie hihi) d’apprendre des rudiments de
prestidigitation, d’improviser un jeu de piste avec pour élément principal une bobine de laine et aussi
d’apprendre des chorégraphie (pour mon plus grand plaisir) pour des animations avec les enfants qui
avait lieu 5 jours sur 7 (le principe de mini si vous connaissez).`

const propsEnigme = ` Veuillez trouver parmi la liste ci-dessous et en vous aidant du texte ci-dessus l’intrus dans cette liste d’activités `

const propsIndice = ``

const Etape3 = ({propsClick}) => {
    return (<ContainerEtape 
    etapeComponent={<ContainEtape3 />}
    title={title}
    paraph={[propsEtape,propsEtape2]}  
    reponse = {response}
    enigme={propsEnigme}
    indice={propsIndice}
    nextStep={propsClick} />)
}

export default Etape3;