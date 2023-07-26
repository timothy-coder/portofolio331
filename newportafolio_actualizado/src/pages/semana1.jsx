import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const Semana1 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Semana1 | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar  />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 01: Fundamentos de las tecnologías web
								</div>

								<div className="subtitle about-subtitle">
								Fundamentos de las tecnologías web es una materia o curso que proporciona una base sólida en los conceptos y tecnologías fundamentales utilizadas en el desarrollo y diseño de aplicaciones web. Esta asignatura suele ser parte de programas de estudio relacionados con ciencias de la computación, ingeniería informática, diseño web y campos afines.

En el curso de Fundamentos de las tecnologías web, los estudiantes adquieren conocimientos y habilidades esenciales que les permiten comprender y trabajar con los componentes clave involucrados en la creación de sitios web y aplicaciones web. Algunos de los temas comunes que se tratan en este curso incluyen:

HTML (HyperText Markup Language): El lenguaje de marcado utilizado para estructurar y presentar el contenido de las páginas web.

CSS (Cascading Style Sheets): Un lenguaje utilizado para describir el aspecto y la presentación de los documentos HTML.

JavaScript: Un lenguaje de programación utilizado para crear interactividad y funcionalidades dinámicas en páginas web.

Arquitectura cliente-servidor: Los conceptos básicos de cómo funcionan las aplicaciones web, donde el cliente (navegador web) solicita recursos y servicios al servidor para su procesamiento.
								</div>
								<a href="https://www.figma.com/file/mXiOeOiy9jsT9YPL394ir5/Untitled?type=design&node-id=0-1&t=6MMfzmO7nWOckGVD-0">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Semana1;
