import { Grid, Typography  } from '@material-ui/core';
import { text } from '../../theme/text'
export default function Footer() {
  return (
    <div className="footer" data-testid='ContainerFooter'>
      <Grid>
        <Grid item xs>
          <Typography data-testid='TextFooter'>{text.find((text) => text.name === 'textFooter').value}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}