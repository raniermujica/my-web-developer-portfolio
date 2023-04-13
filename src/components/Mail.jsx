import { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "../styles/mail.css"
import mailIcon from "../assets/images/contact-img.png"

function Mail () {

    const dataForm = {
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    };

const [data, setData] = useState(dataForm);
const [sendButton, setSendButton] = useState("Enviar");
const [status, setStatus] = useState({});

const formUpdate = (category, value) => {
    setData ({
        ...data,
        [category]: value
    })
};

const handleSubmit = async (e) => {
e.preventDefault();
setSendButton("Enviando...");

let response = await fetch("http://localhost:5000/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(data),
});
setSendButton("Enviar");

let result = await response.json();
setData(dataForm);
if (result.code == 200) {
  setStatus({ succes: true, message: 'Mensaje enviado correctamente'});
} else {
  setStatus({ succes: false, message: '¡Algo ha ocurrido!, por favor inténtalo de nuevo.'});
}
};

return (
    <section className="contact" id="contact">
        <Container className="contact-form">
        <div className="form-space">
                <h2>¿Hablamos?</h2>
                <form onSubmit={handleSubmit} className="form-style">
                  <Col>
                    <Col size={12} sm={6} className="holders" id="holder-name">
                      <input type="text" value={data.firstName} placeholder="Nombre:" onChange={(e) => formUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="holders" id="holder-lastName">
                      <input type="text" value={data.lastName} placeholder="Apellido:" onChange={(e) => formUpdate('lastName', e.target.value)}/>
                    </Col>  
                    <Col size={12} sm={6} className="holders" id="holder-company">
                      <input type="text" value={data.company} placeholder="Empresa:" onChange={(e) => formUpdate('company', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="holders" id="holder-email">
                      <input type="email" value={data.email} placeholder="Email:" onChange={(e) => formUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="holders" id="holder-phone">
                      <input type="tel" value={data.phone} placeholder="Teléfono:" onChange={(e) => formUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="holders" id="holder-message">
                      <textarea rows="6" value={data.message} placeholder="Mensaje:" onChange={(e) => formUpdate('message', e.target.value)}></textarea>
                      <br />
                      <button type="submit"><span>{sendButton}</span></button>
                    </Col>
                    <br />
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "Mensaje no enviado" : "Mensaje enviado"}>{status.message}</p>
                      </Col>
                    }
                  </Col>
                  <Col>
                    <img src={mailIcon} alt="sending-mail"></img>
                </Col>
                </form>        
        </div>
      </Container>
    </section>
)

};

export default Mail;