import React from 'react'
import { 
    Typography, 
    Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../../theme/Button'
import { colors } from '../../theme/variables';
import cv from '../../assets/pdf/cv_antoine.pdf'
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '60px',
        paddingTop: '53px'
    },
    paragraph: {
        fontSize: '18px',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(5),
    },
    align: {
        textAlign: 'left'
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
    container: {
        '& > *': {
            margin: theme.spacing(1),
            marginBottom: theme.spacing(3),
          }, 
    },
    form: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
    },
    input: {
        marginRight:  theme.spacing(3),
    },
    succes: {
        color: colors.marron,
        "& span": {
            color: colors.tuquoise
        }
    },
    error: {
        color: colors.orange,
        fontSize: '14px'
    },
    contentForm: {
        marginTop: theme.spacing(3),
        minheight: 200,
        width: 850,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 10
    },
    morse: {
        fontSize: 49
    }
}));
const download = (fileUrl, fileName) => {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }


const Etape4 = () => {
    const classes = useStyles();
      
    const handleClick = () => {
        download(cv, "CV_Antoine.pdf");
    }
    return (
        <>
            <Typography className={classes.instructions}>
                <h1 style={{paddingTop: 15 }} data-testid="Etape3Title">Un grand merci a vous !</h1>
                <Container maxWidth="lg" className={classes.align}>
                    <Typography className={classes.paragraph}>
                        Phrase de remerciment
                    </Typography>
                </Container>
            </Typography>
            <div className={classes.container}>
                <ButtonCustom 
                dataTestid="TelechargerCv" 
                label="Télécharger le CV" 
                handleClick={handleClick}
                startIcon={<GetAppIcon />} />
            </div>
        </>
        
    )
}
export default Etape4;