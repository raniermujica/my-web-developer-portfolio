import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import aboutPicture from "../assets/images/about-me.png";
import "../styles/about.css";

function About() {
  return (
    <section className="about-information" id="about-information">
      <Container className="about-container">
        <Row className="about-row">
          <div className="about-left-col" xs={12} md={6} xl={5}>
            <img src={aboutPicture} alt="portrait" />
          </div>
          <div className="about-right-col" xs={12} md={6} xl={7}>
            <h2>Me llamo Ranier y esta es mi historia.</h2>
            <p align="justify">
              &nbsp;&nbsp;&nbsp;&nbsp;
              ¿Siempre supe que quería desarrollarme en esta área? La respuesta
              es no.
              <br />
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;
              A mediados del 2022 decidí darle un nuevo giro a mi mundo personal
              y profesional y comencé a estudiar desarrollo web, primero de
              manera autodidacta, y luego de la mano de una de las mejores
              academias para el estudio de herramientas de desarrollo web como
              lo es <b>Ironhack</b>. Con ellos pude completar nueve semanas intensas en
              el estudio de JavaScript, HTML, CSS, React, MongoDB, Express, Node
              y otras tantas herramientas lo que me permitieron poder
              desarrollar tres proyectos complejos para finalmente obtener el
              certificado de Desarrollador Web Full Stack.
              <br />
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;
              Mis comienzos profesionales fueron en el ámbito de la comunicación
              audiovisual, siendo mis estudios principales, así como también
              áreas como la fotografía, el diseño y el marketing digital. Desde
              hace más de diez años me he desempeñado como fotógrafo freelance y
              he podido trabajar en campañas publicitarias, moda o e-commerce.
              Como desarrollador MERN junior y gracias a mi experiencia en
              marketing digital y aplicaciones como Wordpress y Prestashop,
              puedo crear entornos relacionados con el comercio electrónico y
              enfrentarme a nuevos retos en distintos sectores.
            </p>
            <button>
              <a href="https://www.behance.net/ranierenrique" target="_blank">Descubre mi portfolio artístico</a>
              <ArrowRightCircle size={30} />
            </button>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
