import { Container, Row } from "react-bootstrap";
import behance from "../assets/images/behance-icon-2.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/git-2.png";
import "../styles/footer.css";

function Footer () {
    return (
        <footer className="footer-section">
            <section className="copyright-section">
              <p>Copyright 2023. All Rights Reserved</p>
            </section>
            <section className="icon-section">
                  <a href="https://www.linkedin.com/in/ranier-enrique-mujica/" target="_blank" ><img src={linkedin} alt="social"className="icon-social-png"/></a>
                  <a href="https://github.com/raniermujica" target="_blank" ><img src={github} alt="social" className="icon-social-png"/></a>
                  <a href="https://www.behance.net/ranierenrique" target="_blank" ><img src={behance} alt="social" className="icon-social-png"/></a>
            </section>
        </footer>
      )
};

export default Footer;