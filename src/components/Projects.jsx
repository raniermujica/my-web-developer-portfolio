import {Container, Row, Col} from 'react-bootstrap'
import project1 from "../assets/images/project-cockroach.png"
import project2 from "../assets/images/project-foodies.png"
import project3 from "../assets/images/project-wanderlust.png"
import project4 from "../assets/images/project-oso.png"
import project5 from "../assets/images/project-underdogs.png"
import Card from "./Card"
import "../styles/projects.css"

function Projects () {

    const examples = [
        {
          title: "Cockroach Street",
          about: "Mi primer videojuego. Desarrollado con JavaScript y HTML",
          imgUrl: project1,
          url: "https://raniermujica.github.io/cockroach-street/",
        },
        {
          title: "Foodies App",
          about: "MVP de app web para buscar, valorar y recomendar restaurantes. Frontend desarrollado con Handlebars y backend con JavaScript, Node, Express y MongoDB",
          imgUrl: project2,
          url: "https://foodies.cyclic.app/",
        },
        {
          title: "Wanderlust App",
          about: "MVP de app web para organizar itinerarios de viajes y crear experiencias para viajeros del mundo. Frontend realizado con React y backend con JavaScript, Node, Express y MongoDB.",
          imgUrl: project3,
          url: "https://wanderlust-bnt.netlify.app/",
        },
        {
          title: "Oso The Game",
          about: "Juego de lógica desarrollado íntegramente con React y JavaScript.",
          imgUrl: project4,
          url: "https://oso-juego-online.vercel.app/",
        },
        {
          title: "Underdogs Online Store",
          about: "Tienda online en desarrollo realizada bajo el stack MERN para la marca de ropa Underdogs.",
          imgUrl: project5,
          url: "https://github.com/raniermujica/underdogs-server",
        },
      ];

      return (
        <section className="project-section" id="project-section">
          <h2>Proyectos Desarrollados</h2>
      <Container className='project-map'>      
                        {examples.map((project, index) => {
                            return (
                              <Card
                                key={index}
                                {...project} />)})}              
      </Container>
    </section>
      );

};

export default Projects; 