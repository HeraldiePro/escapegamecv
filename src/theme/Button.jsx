import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { colors, gradient } from './variables'

const useStyles = makeStyles(theme => ({
    primary: {
      background: gradient.primary,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px '+ colors.tuquoiseClaire,
      color: 'white',
      height: 48,
      padding: '0 30px',
      [theme.breakpoints.up('xs')]: {
        marginTop: '20px'
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: '20px'
      }
      // marginRight: '10px'
    },
    secondary: {
      background: gradient.secondary,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px '+ colors.grisClaire,
      color: 'white',
      height: 48,
      padding: '0 30px'
    }
  }));
  
const ButtonCustom = ({label = 'Button', 
handleClick = () => {}, 
typeButton = 'primary',
submit = false,
dataTestid = '',
startIcon = ''}) =>  {
  const classes = useStyles();
  return <Button 
  className={(typeButton === 'primary') ? classes.primary : classes.secondary}
  onClick={handleClick}
  type={(submit) ? 'submit':'button'}
  data-testid = {dataTestid}
  startIcon = {startIcon}
  >{label}</Button>;
}

export default ButtonCustom;