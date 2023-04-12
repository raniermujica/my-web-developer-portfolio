import { Col } from "react-bootstrap";
import "../styles/projects.css";

function Card ({title, about, imgUrl, url}) {
    return (
          <div className="card-information">
            <img src={imgUrl} />
            <div className="card-text">
              <h4><a href={url} target="_blank">{title}</a></h4>
              <br></br>
              <span><a href={url} target="_blank">{about}</a></span>
            </div>
          </div>
      )
};

export default Card;