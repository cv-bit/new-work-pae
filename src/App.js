import {ThemeProvider} from 'styled-components'
import GlobalStyles from './Global'
import { Container } from './components/Container.styled';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes} from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import LandingPage from './pages/Landing/LandingPage';
import ScrollToTop from './helpers/ScrollToTop'
import SampleReader from './pages/reader/SampleReader';

const theme = {
  colors: {
    header: '#2a2a2a',
    body: '#fff',
    footer: '#2a2a2a'
  },
  mobile: '768',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Container>
          <Header/>
              <Routes>
                <Route exact path="" element={<LandingPage/>}/>
                <Route exact path="/samplereader" element={<SampleReader/>}/>
              </Routes>
          <Footer/>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
