import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import semana1 from '../../Assets/semana1.jpg'
import semana2 from '../../Assets/semana2.jpg'
import semana3 from '../../Assets/semana3.jpg'
import semana4 from '../../Assets/semana4.jpg'
import semana5 from '../../Assets/semana5.jpg'
import semana6 from '../../Assets/semana6.jpg'
import semana7 from '../../Assets/semana7.jpg'
import semana8 from '../../Assets/semana8.jpg'
import semana9 from '../../Assets/semana9.jpg'
import semana10 from '../../Assets/semana10.jpg'
import semana11 from '../../Assets/semana11.jpg'
import semana12 from '../../Assets/semana12.jpg'
import semana13 from '../../Assets/semana13.jpg'
import semana14 from '../../Assets/semana14.jpg'
import semana15 from '../../Assets/semana15.jpg'
import semana16 from '../../Assets/semana16.jpg'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana1}
                isBlog={false}
                title="Semana 01"
                description="Fundamentos de las tecnologías web"
                ghLink="https://www.figma.com/file/mXiOeOiy9jsT9YPL394ir5/Untitled?type=design&node-id=0-1&t=6MMfzmO7nWOckGVD-0"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana2}
                isBlog={false}
                title="Semana 02"
                description="Herramienta de desarrollo"
                ghLink="https://github.com/timothy-coder/Bolita/blob/main/emmet.html"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana3}
                isBlog={false}
                title="Semana 03"
                description="Programación Front-End Javascript"
                ghLink="https://wp.ditsolution.net/techno/home-8/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana4}
                isBlog={false}
                title="Semana 04"
                description="Manejo del DOM con Javascript"
                ghLink="https://timothy-coder.github.io/Bolita/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana5}
                isBlog={false}
                title="Semana 05"
                description="Desarrollo FrontEnd con Framework JS"
                ghLink="https://timothy-coder.github.io/json/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana6}
                isBlog={false}
                title="Semana 06"
                description="Eventos, Condicionales y Bucles con Framework JS"
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana7}
                isBlog={false}
                title="Semana 07"
                description="Exposición de Trabajos de aplicación."
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana8}
                isBlog={false}
                title="Semana 08"
                description="Revisión de evaluación logro y retroalimentación"
                ghLink="https://github.com/timothy-coder/portofolionic"

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana9}
                isBlog={false}
                title="Semana 09"
                description="Routing & consume API"
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana10}
                isBlog={false}
                title="Semana 10"
                description="Uso de Hooks"
                ghLink=""
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana11}
                isBlog={false}
                title="Semana 11"
                description="Next JS – CSR / SSR"
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana12}
                isBlog={false}
                title="Semana 12"
                description="API RESTFUL con SPRINT BOOT"
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana13}
                isBlog={false}
                title="Semana 13"
                description="Registro de Microservicios en Eureka"
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana14}
                isBlog={false}
                title="Semana 14"
                description="Consumo de un Microservicio"
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana15}
                isBlog={false}
                title="Semana 15"
                description="Evaluación conceptual 03 "
                ghLink=""

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={semana16}
                isBlog={false}
                title="Semana 16"
                description="Segundo consolidado de la evaluación continua y reforzamiento"
                ghLink=""

              />
            </Col>

          </Row>
          
        </Container>
        
      </Container>
      
    </div>
  )
}
export default Projectlist