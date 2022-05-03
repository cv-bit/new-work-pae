import {ThemeProvider} from 'styled-components'
import GlobalStyles from './Global'
import { Container } from './components/Container.styled';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes} from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import LandingPage from './pages/Landing/LandingPage';
import ScrollToTop from './helpers/ScrollToTop'
import SampleAuthoring from './components/authoring/SampleAuthoring';
import Reader from './components/reader/Reader'

const theme = {
  colors: {
    header: '#2a2a2a',
    body: '#f3f3f3',
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
                <Route exact path="/reader" element={<Reader/>}/>
                <Route exact path="/edit" element={<SampleAuthoring/>}/>
              </Routes>
          <Footer/>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
