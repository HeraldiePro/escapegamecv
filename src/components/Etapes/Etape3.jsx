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
import { Etape3Text } from '../../theme/TextElement'



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

const response = "sport"

const Etape3 = ({propsClick}) => {
    return (<ContainerEtape 
    etapeComponent={<ContainEtape3 />}
    title={Etape3Text.title}
    paraph={[Etape3Text.descriptionParaph1,Etape3Text.descriptionParaph2]}  
    reponse = {response}
    enigme={Etape3Text.enigme}
    indice={Etape3Text.indice}
    nextStep={propsClick} />)
}

export default Etape3;