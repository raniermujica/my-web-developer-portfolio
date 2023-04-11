import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
