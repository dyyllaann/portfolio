import './App.css';

// Image imports
import me from './images/drums.png';
import downArrow from './images/down-arrow.png';
import todoScreen from './images/todo-screen.png';
import reScreen from "./images/re-screen.png";
import dashScreen from './images/dash-screen.png';
import surfScreen from './images/surf-screen.png';
import weatherScreen from './images/weather-screen.png';

import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PortfolioCard from './PortfolioCard';


function Header() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);
  return (
		<nav>
			<a
				className="expand"
				href="/"
				onClick={(e) => {
					let hero = document.getElementById("hero");
					e.preventDefault();
					hero && hero.scrollIntoView({ behavior: "smooth", block: "end" });
					window.history.pushState("", "", "/");
				}}
			>
				{window.matchMedia("(max-width: 550px)").matches ? 'D.A.' : 'Dylan Arveson'}
			</a>
			<a
				className="expand"
				href="/"
				onClick={(e) => {
					let about = document.getElementById("about");
					e.preventDefault();
					about && about.scrollIntoView({ behavior: "smooth", block: "end" });
					window.history.pushState("about", "about", "/about");
				}}
			>
				About
			</a>
			<a
				className="expand"
				href="/"
				onClick={(e) => {
					let portfolio = document.getElementById("portfolio");
					e.preventDefault();
					portfolio &&
						portfolio.scrollIntoView({ behavior: "smooth", block: "end" });
					window.history.pushState("portfolio", "portfolio", "/portfolio");
				}}
			>
				Portfolio
			</a>
			<a
				className="expand"
				href="/"
				onClick={(e) => {
					let contact = document.getElementById("contact");
					e.preventDefault();
					contact &&
						contact.scrollIntoView({ behavior: "smooth", block: "end" });
					window.history.pushState("contact", "contact", "/contact");
				}}
			>
				Contact
			</a>
		</nav>
	);
}

function Hero() {
	return (
    <section id="hero">
      <div className="header-left">
        <h1>Designer<br/>&amp; Developer</h1>
      </div>
      <div>
        <img className="portrait" src={me} alt="me" />
      </div>
      <div className="hero-bottom">
        <div>
          <img className="downArrow" src={downArrow} alt="Bold arrow pointing down." />
        </div>
        <div className="header-right">
          <h1>Dylan Arveson</h1>
        </div>
      </div>
    </section>
	);
}

function About() {

  return (
		<section id="about">
			<div>
				<h1>About Section</h1>
			</div>
			<div id="about-paragraph">
				<p>
					### Hi there! I'm Dylan 👋 <br /> <br />
					I am a licensed real estate broker and full-stack developer from Port
					Townsend, Washington. When I'm not helping clients buy or sell a home,
					I write applications to make my workflow easier.
          <br />
          <br />
          My tech stack includes: <br />
          HTML5, CSS3, JS ES6 <br />
          React, Node.js, Express <br />
          Material UI <br />
          Python <br />
          VS Code, Git, AWS, Figma
          <br />
          <br />
          Currently I'm learning: <br />
					MongoDB to complete my MERN stack <br />
          Tailwind CSS <br />
          Google's UX Design course 
          <br />
          <br />
          In my free time, you can find me in the mountains or waters of the 
          Pacific Northwest, creating music, motorcycling, or tinkering on a new 
          project. 
				</p>
			</div>
		</section>
	);
}

function Portfolio() {

  return (
		<section id="portfolio">
			<h1>Portfolio Section</h1>
			<div className="portfolio-grid">
				<PortfolioCard
					name={"To-Do List"}
					description={
						"A to-do list inspired by Mik Skuza's design for KosmoTime."
					}
					tools={"JavaScript ES6, React, Node"}
					image={todoScreen}
					link="https://dyyllaann.github.io/todo/"
				/>
				<PortfolioCard
					name={"Real Estate Productivity App"}
					description={
						"A productivity tool that calculates deadlines, autopopulates a contract summary, and saves the contract summary to PDF."
					}
					tools={"React, Node, Material UI, pdfmake"}
					image={reScreen}
					link="https://main.dvznkfo3mus0h.amplifyapp.com/"
				/>
				<PortfolioCard
					name={"Browser Dashboard"}
					description={
						"A browser dashboard integrated with Google that shows upcoming events, tasks, and projects."
					}
					tools={"JavaScript, HTML, CSS, Google Calendar API, Auth0, Moment.js"}
					image={dashScreen}
				/>
				<PortfolioCard
					name={"Surf Forecast Alert"}
					description={
						"An app that scrapes NOAA data and sends a text alert whenever conditions meet the ideal criteria."
					}
					tools={"Python"}
					libraries={"BeautifulSoup, smtplib, time, schedule"}
					image={surfScreen}
					link="https://github.com/dyyllaann/surf-app"
				/>
				<PortfolioCard
					name={"Weather App"}
					description={
						"An app that allows users to access OpenWeatherMap's API to get a real-time weather report."
					}
					tools={"JavaScript, HTML, CSS + flex, OpenWeatherMap API"}
					image={weatherScreen}
					link="https://github.com/dyyllaann/weather-app"
				/>
			</div>
		</section>
	);
}

function Contact() {
  return (
		<section id="contact">
			<div>
				<h1>Contact Section</h1>
			</div>
      <div>
        <h2>
          Dylan Arveson
        </h2>
      </div>
			<div>
				<a href="https://www.github.com/dyyllaann" rel="noreferrer" target="_blank">
					github.com/dyyllaann
				</a>
				<br />
				<a href="https://www.twitter.com/dylancodes" rel="noreferrer" target="_blank">
					twitter.com/dylancodes
				</a>
				<br />
				<a
					href="https://www.linkedin.com/in/dylan-arveson"
					rel="noreferrer"
					target="_blank"
				>
					linkedin.com/in/dylan-arveson
				</a>
				<br />
			</div>
			<div>
				<a
					href="mailto:dylan.arveson@gmail.com?body=Hey Dylan!"
					rel="noreferrer"
					target="_blank"
				>
					mailto: dylan.arveson@gmail.com
				</a>
			</div>
		</section>
	);
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </BrowserRouter>
    </div>
  );
}
