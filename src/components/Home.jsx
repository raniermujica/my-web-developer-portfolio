import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import homeImg from "../assets/images/fondo-ilustracion-linkedin.png";
import '../styles/home.css'

function Home() {

    const [initialLoop, setInitialLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [wordsInterval, setWordsInterval] = useState(300 - Math.random() * 100)

    const rotateAnimation = [ "Web Developer", "Web Designer" ];
    const periodInterval = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, wordsInterval)

        const tick = () => {
            let i = initialLoop % rotateAnimation.length;
            let allText = rotateAnimation[i];
            let updatedText = isDeleting ? allText.substring(0, text.length - 1) : allText.substring(0, text.length + 1); 

            setText(updatedText);

            if (isDeleting) {
                setWordsInterval(prevInterval => prevInterval / 2);
            }

            if (!isDeleting && updatedText === allText) {
                setIsDeleting(true);
                setIndex(prevIndex => prevIndex - 1);
                setWordsInterval(periodInterval);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false)
                setInitialLoop(initialLoop + 1);
                setIndex(1);
                setWordsInterval(500);
            } else {
                setIndex(prevIndex => prevIndex + 1);
            }
        }

        return () => {clearInterval(ticker)}
    }, [text])

    return(
        <section className="home">
        <Container className="central-box">
            <Row className="central-row">
                <Col className="col-one" xs={12} md={6} xl={7}>
                    <span className="tagline">Bienvenidos, me llamo Ranier Mujica</span>
                    <h1>{`¡Hola! soy `}<span className="wrap">{text}</span></h1>
                    <p>Desarrollo aplicaciones web Full Stack y me apasiona el mundo del Frontend.</p>
                    <p>Me especializo en tecnologías como JavaScript, React, HTML5 y CSS.</p>
                    {/* <button onClick={() => console.log("Conect")}>¡Hablemos!<ArrowRightCircle size={25} /></button> */}
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={homeImg} alt="header-img"/>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Home;