
import './App.css';
import AboutComp from './Components/AboutComp/AboutComp';
import ContactPage from './Components/ContactPage/ContactPage';
import DesignComp from './Components/DesignComp/DesignComp';
import LandingPage from './Components/LandingPage/LandingPage';
import StudioComp from './Components/StudioComp/StudioComp';
import ProgramComp from './Components/ProgramComp/ProgramComp';
import GridComp from './Components/GridComp/GridComp';
import FooterComp from './Components/FooterComp/FooterComp';


function App() {
  return (
    <div className="App">
     <LandingPage/>
     <AboutComp/>
     <DesignComp/>
     <ProgramComp/>
     <GridComp/>
     <StudioComp/>
     <ContactPage/>
     <FooterComp/>
    </div>
  );
}

export default App;
