import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Hero />
			<Skills />
			<Portfolio />
			<Contact />
		</BrowserRouter>
	</React.StrictMode>
);