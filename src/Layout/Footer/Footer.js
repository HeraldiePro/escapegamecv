import { Grid, Typography, useMediaQuery, useTheme   } from '@material-ui/core';
export default function Footer() {
  const theme = useTheme();
  const showLongText = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className="footer" data-testid='ContainerFooter'>
      <Grid>
        <Grid item xs>
          <Typography data-testid='TextFooter'>{showLongText ? '© Site sous résèvre de droit a ne pas copier' : '©' }</Typography>
        </Grid>
      </Grid>
    </div>
  )
}