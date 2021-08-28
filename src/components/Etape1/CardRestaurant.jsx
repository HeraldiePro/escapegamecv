import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,
    CardContent,
    ListItem,
    ListItemIcon ,
    ListItemText,
    List,
    Typography
 }from '@material-ui/core';
import { colors, gradient } from '../../theme/variables';
import SvgIcon from '@material-ui/core/SvgIcon';

function FastFoodIconIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
      </SvgIcon>
    );
  }
const useStyles = makeStyles((theme) => ({
    root: {
        // minWidth: 275,
        width: 500,
        //textAlign: 'center'
    
    },
    title: {
        fontSize: 22,
        color: colors.violetFoncer,
        fontFamily: 'Adigiana-Toybox-Regular'
    },
    listRoot: {
        flexGrow: 1,
        maxWidth: 752,
    },
    
    notabenne: {
        color: colors.violetClair,
        marginTop: theme.spacing(3),
        
    }
}));



const menus = [
    {
        name: "Menu Sunday :",
        price: "7.60"
    },
    {
        name: "Menu Sunday :",
        price: "7.60"
    },
    {
        name: "Menu Sunday :",
        price: "7.60"
    },
    {
        name: "Menu Sunday :",
        price: "7.60"
    }
];


export default function SimpleCard() {
  const classes = useStyles();
  return (
    <div>
      <List>
          {menus.map((menu) => 
          <ListItem key={menu.name}>
            <ListItemIcon>
              <FastFoodIconIcon style={{ color: colors.rose }}/>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6" style={{ color: colors.violetClair }}>{ menu.name }</Typography>}
              secondary={<Typography variant="p" style={{ color: colors.violetFoncer }}>{ menu.price }</Typography>}
            />
          </ListItem>)}
      </List>
      <Typography className={classes.notabenne}><i>*sur présentation d’une carte étudiant une réduction de 10% sera appliquée sur votre commande</i></Typography>
    </div>
  );
}