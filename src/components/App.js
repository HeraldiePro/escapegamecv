import { ThemeProvider  } from '@material-ui/core/styles';
import { CssBaseline, Container} from '@material-ui/core';
import '../assets/font/Adigiana-Toybox-Regular.ttf.eot'
// import StepperContent from '../components/Stepper/Stepper'
import Footer from '../Layout/Footer/Footer'
import MainContent from '../Layout/MainContent/MainContent'



const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
        <Container maxWidth="lg">
          <MainContent />
          <Footer />
        </Container>
    </ThemeProvider>
    
  )
}

export default App;
