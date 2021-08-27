import { ThemeProvider  } from '@material-ui/core/styles';
import { CssBaseline, Container} from '@material-ui/core';
import '../assets/font/Adigiana-Toybox-Regular.ttf.eot'
import StepperContent from '../components/Stepper/Stepper'
import Footer from './Footer/Footer'



const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="content">
          <StepperContent />
          <Footer />
        </div>
      </Container>
      
    </ThemeProvider>
    
  )
}

export default App;
