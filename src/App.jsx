import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Mail from './components/Mail';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Mail/>
      <Footer/>
    </div>
  )
}

export default App
