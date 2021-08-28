import { Grid, Typography  } from '@material-ui/core';
export default function Footer() {
  return (
    <div className="footer" data-testid='ContainerFooter'>
      <Grid>
        <Grid item xs>
          <Typography data-testid='TextFooter'>© Site appartenant a doubi</Typography>
        </Grid>
      </Grid>
    </div>
  )
}