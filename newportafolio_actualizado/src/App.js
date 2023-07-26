import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Semana1 from "./pages/semana1";
import Semana2 from "./pages/semana2";
import Semana3 from "./pages/semana3";
import Semana4 from "./pages/semana4";
import Semana5 from "./pages/semana5";
import Semana6 from "./pages/semana6";
import Semana7 from "./pages/semana7";
import Semana8 from "./pages/semana8";
import Semana9 from "./pages/semana9";
import Semana10 from "./pages/semana10";
import Semana11 from "./pages/semana11";
import Semana12 from "./pages/semana12";
import Semana13 from "./pages/semana13";
import Semana14 from "./pages/semana14";
import Semana15 from "./pages/semana15";
import Semana16 from "./pages/semana16";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/semana1" element={<Semana1 />} />
				<Route path="/semana2" element={<Semana2 />} />
				<Route path="/semana3" element={<Semana3 />} />
				<Route path="/semana4" element={<Semana4 />} />
				<Route path="/semana5" element={<Semana5 />} />
				<Route path="/semana6" element={<Semana6 />} />
				<Route path="/semana7" element={<Semana7 />} />
				<Route path="/semana8" element={<Semana8 />} />
				<Route path="/semana9" element={<Semana9 />} />
				<Route path="/semana10" element={<Semana10 />} />
				<Route path="/semana11" element={<Semana11/>} />
				<Route path="/semana12" element={<Semana12/>} />
				<Route path="/semana13" element={<Semana13 />} />
				<Route path="/semana14" element={<Semana14 />} />
				<Route path="/semana15" element={<Semana15 />} />
				<Route path="/semana16" element={<Semana16 />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
