import { ThemeProvider  } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';
import '../assets/font/Adigiana-Toybox-Regular.ttf.eot'
import Footer from '../Layout/Footer/Footer'
import MainContent from '../Layout/MainContent/MainContent'



const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
        <MainContent />
        <Footer />
    </ThemeProvider>
    
  )
}

export default App;
