import React from "react";
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import Us from "./Screens/Us";
import Resources from "./Screens/Resources";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";
import WhatsAppButton from "./Screens/WhatsAppButton"; 
// import AtencionIndividual from "./Screens/AtencionIndividual"
// import AtencionNinosAdolescentes from "./Screens/AtencionNinosAdolescentes"
// import AtencionParaPadres from "./Screens/AtencionParaPadres";
// import OrientacionVocacional from "./Screens/OrientacionVocacional"
// import TerapiaDeParejas from "./Screens/TerapiaDePareja"
import './App.module.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Us />
      <Resources />
      <Contact />
      <WhatsAppButton /> 
      {/* <AtencionIndividual />
      <AtencionNinosAdolescentes/>
      <AtencionParaPadres/>
      <OrientacionVocacional/>
      <TerapiaDeParejas/> */}

    </div>
  );
}

export default App;