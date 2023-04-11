import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import chart1 from "../assets/images/javascript-porcentaje.png"
import chart2 from "../assets/images/html-porcentaje.png"
import chart3 from "../assets/images/css-porcentaje.png"
import chart4 from "../assets/images/react-porcentaje.png"
import chart5 from "../assets/images/vue-porcentaje.png"
import chart6 from "../assets/images/bootstrap-porcentaje.png"
import chart7 from "../assets/images/adobe-porcentaje.png"
import chart8 from "../assets/images/node-porcentaje.png"
import chart9 from "../assets/images/express-porcentaje.png"
import chart10 from "../assets/images/mongo-porcentaje.png"
import chart11 from "../assets/images/sql-porcentaje.png"
import "../styles/skills.css"

function Skills () {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skills-section" id="skills-section">
                <div className="container">
                    <div className="skill-chart">
                        <h2>
                            Habilidades Técnicas
                        </h2>
                        <Carousel responsive={responsive} infinite={true} className="sliders">
                            <div className="chart-box">
                                <img src={chart1} alt="chart" />
                                <h4>JavaScript</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart2} alt="chart" />
                                <h4>HTML5</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart3} alt="chart" />
                                <h4>CSS</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart4} alt="chart" />
                                <h4>React</h4>
                            </div> 
                            <div className="chart-box">
                                <img src={chart5} alt="chart" />
                                <h4>Vue</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart6} alt="chart" />
                                <h4>Bootstrap</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart7} alt="chart" />
                                <h4>Adobe Creative Suite</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart8} alt="chart" />
                                <h4>Node.js</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart9} alt="chart" />
                                <h4>Express</h4>
                            </div>
                            <div className="chart-box">
                                <img src={chart10} alt="chart" />
                                <h4>MongoDB</h4>
                            </div>
                            {/* <div className="chart-box">
                                <img src="" alt="chart" />
                                <h4>Java</h4>
                            </div> */}
                            <div className="chart-box">
                                <img src={chart11} alt="chart" />
                                <h4>SQL</h4>
                            </div>
                        </Carousel>
                    </div>
                    </div>
        </section>
      );
};

export default Skills;