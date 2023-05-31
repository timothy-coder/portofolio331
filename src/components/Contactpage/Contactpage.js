import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Mantente en contacto</h2>
        <p className="contactpara">
          Estoy buscando oportunidades para aprender mas sobre front-end, back-end roles
          <br />Si hay alguna vacante mi inbox esta siempre abierto.
          <br />Si quieres hacer algunas pregunta o quieres saludar, <br />
          Tratare de hacer mi mejor esfuerzo para retribuirtelo!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://t.me/Nickolasgrs");
          }}
        >
          Di Hola!!
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>timothy-coder</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
