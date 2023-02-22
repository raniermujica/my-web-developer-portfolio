import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import  gitLogo  from '../assets/images/git.png'
import linkdin from '../assets/images/linkedin.png'
import {
    BrowserRouter as Router
  } from "react-router-dom";

const NavBar = () => {

  const [clickedLink, setclickedLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateclickedLink = (value) => {
    setclickedLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={clickedLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateclickedLink('home')}>Inicio</Nav.Link>
              <Nav.Link href="#about" className={clickedLink === 'about me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateclickedLink('about me')}>Sobre mí</Nav.Link>
              <Nav.Link href="#skills" className={clickedLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateclickedLink('skills')}>Habilidades</Nav.Link>
              <Nav.Link href="#projects" className={clickedLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateclickedLink('projects')}>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-contact">
              <div className="social-icon">
                <a href="https://github.com/raniermujica"><img src={gitLogo} alt="" /></a>
                <a href="https://www.linkedin.com/in/ranier-enrique-mujica/"><img src={linkdin} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Hablemos</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar;