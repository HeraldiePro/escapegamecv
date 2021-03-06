import React from 'react'
import { Grid , Button, Typography, Container } from '@material-ui/core';
import {  Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { colors, gradient } from '../../theme/variables';
import { AcceuilText } from '../../theme/TextElement'

const useStyles = makeStyles((theme) => ({
    title: {
        color: colors.blanc,
        fontSize: '50px'
    },
    buttonTitle: {
        background: gradient.title,
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px '+ colors.grisClaire,
        color: 'white',
        fontSize: '20px'
    },
    paragraph: {
        color: colors.blanc,
        fontSize: '18px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5),
    }
}));

const Acceuil = () =>{ 
    const classes = useStyles();
    return(
        <Grid>
            <Grid item xs>
                <div data-testid="ContentAcceuil" className="content-acceuil">
                    <div data-testid="ContenuAcceuil" className="contenu-acceuil">
                        <h1 data-testid="TitleAcceuil" className={classes.title}>{AcceuilText.title}</h1>
                        <Container maxWidth="md">
                            <Typography data-testid="ParagraphAcceuil" className={classes.paragraph}>
                                {AcceuilText.description} <span role="img" aria-label="smile">😊</span> .
                            </Typography>
                            <Button data-testid="ButonAcceuil" className={classes.buttonTitle} component={ Link } to="/enigmes">
                                {AcceuilText.button}
                            </Button> 
                        </Container>
                    </div>
                </div>
            </Grid>
        </Grid> 
    )
}
    


export default Acceuil