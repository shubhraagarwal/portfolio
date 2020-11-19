import React from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Footer from './Components/Connect'
// import Projects from './Components/Projects';
import '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <Skills />
    <Footer />
    {/* <Projects /> */}
    </div>
  );
}

export default App;
