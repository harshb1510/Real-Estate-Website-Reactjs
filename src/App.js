import Header from "../src/components/Header/Header"
import Hero from "../src/components/Hero/Hero"
import './App.css';
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Getstarted from "./components/get Started/Getstarted";

function App() {
  return (
    <div className="app">
      <div>
      <div className="white-gradient"/>
   <Header/>
   <Hero/>
   </div>
   <Companies/>
   <Residencies/>
    <div className="white-gradient2"/>
   <Value/>
   <Contact/>
   <Getstarted/>
   <Footer/>
   </div>
  
  );
}

export default App;
