import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre <span>Mi</span></h3>
                        <p className='aboutdetails'>Yo soy un Front End developer de Perú. Este es un portafolio del Curso de Desarrollo de Aplicaciones Web. Curioso de aprender mas conocimientos sobre programacion, dinamica de sistemas, escribir y optimizar codigo. Un diseño responsable hace tu pagina web accesible a todos los usuarios.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
                <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>timothy-coder</span>
        </p>
            </Container>
        </div>
    )
}

export default Aboutpage