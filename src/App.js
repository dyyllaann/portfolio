import './App.css';

import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PortfolioCard from './PortfolioCard';

// Image imports
import me from './images/drums.png';
import downArrow from './images/down-arrow.png';
import kosmotimeClone from './images/kosmotime-clone.gif';
import reScreen from "./images/re-screen.png";
import dashScreen from './images/dash-screen.png';
// import surfScreen from './images/surf-screen.png';
import membersScreen from './images/members-screen.png';
import weatherScreen from './images/weather-screen.png';
import subPopClone from './images/sub-pop-clone.gif';

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
					let skills = document.getElementById("skills");
					e.preventDefault();
					skills && skills.scrollIntoView({ behavior: "smooth", block: "end" });
					window.history.pushState("skills", "skills", "/skills");
				}}
			>
				Skills
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
			<div id="background-circle"></div>
			<div className="header-left">
				<h1>Full Stack Developer</h1>
			</div>
			<div>
				<div id="bio">
					<p>
						### Hi there! I'm Dylan 👋 <br /> <br />I am a full stack (MERN)
						developer from Washington State.
					</p>
					<br />
					<p>
						My first exposure to web development was teaching myself basic HTML
						at 12 years old to create websites for fun. Since then, I've created
						dozens of websites and apps that make my life easier.
					</p>
					<br />
					<p>
						In 2021, I began learning data structures & algorithms and advanced
						web development with Python and MERN technologies via App Academy
						Open and The Odin Project.
					</p>
					<br />
					<p>
						In my free time, you can find me in the mountains or waters of the
						Pacific Northwest, creating music, camping, motorcycling, or tinkering on a
						new project.
					</p>
				</div>
				<br />
			</div>
			<div className="hero-bottom">
				<div>
					<a
						className="expand"
						href="/"
						onClick={(e) => {
							let skills = document.getElementById("skills");
							e.preventDefault();
							skills &&
								skills.scrollIntoView({ behavior: "smooth", block: "end" });
							window.history.pushState("skills", "skills", "/skills");
						}}
					>
						<img
							className="downArrow"
							src={downArrow}
							alt="Bold arrow pointing down."
						/>
					</a>
				</div>
				<div className="header-right">
					<h1>Dylan Arveson</h1>
				</div>
			</div>
		</section>
	);
}

function Skills() {

  return (
		<section id="skills">
			<div>
				<h1>Skills Section</h1>
			</div>
			<div id="skills-paragraph">
				{/* ICONS */}
				{/* 
				<i class="devicon-bootstrap-plain-wordmark"></i>
				<i class="devicon-graphql-plain-wordmark"></i>
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="" class="devicon"/>
				<i class="devicon-webpack-plain-wordmark"></i>
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain-wordmark.svg" /> */}
				<h2>FRONTEND:</h2>
				{/* <p>Material UI, Pug</p> */}
				<i class="devicon-react-original-wordmark"></i>
				<i class="devicon-javascript-plain"></i>
				<i class="devicon-html5-plain-wordmark"></i>
				<i class="devicon-css3-plain"></i>
				<br />
				<br />
				<h2>BACKEND:</h2>
				<i class="devicon-nodejs-plain-wordmark"></i>
				<i class="devicon-express-original-wordmark"></i>
				<i class="devicon-mongodb-plain-wordmark"></i>
				<i class="devicon-python-plain-wordmark"></i>
				<br />
				<br />
				<h2>TOOLS:</h2>
				<i class="devicon-amazonwebservices-plain-wordmark"></i>
				<i class="devicon-npm-original-wordmark"></i>
				<i class="devicon-vscode-plain-wordmark"></i>
				<i class="devicon-figma-plain"></i>
				<i class="devicon-firebase-plain"></i>
				<i class="devicon-jest-plain"></i>
				<i class="devicon-git-plain-wordmark"></i>
				<i class="devicon-photoshop-line"></i>
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
					name={"Members Only / 'HushBook'"}
					description={
						"A social media app that allows users to create an account and post anonymously."
					}
					tools={"Express, Node, MongoDB / Mongoose"}
					image={membersScreen}
					link="https://dyyllaann-members-only.herokuapp.com/"
				/>
				<PortfolioCard
					name={"Sub Pop Mega Mart Clone"}
					description={
						"Clone of Sub Pop's online store, including login and Inventory Management System."
					}
					tools={"Express, Node, MongoDB / Mongoose"}
					image={subPopClone}
					link="https://sub-pop-clone.herokuapp.com/catalog"
				/>
				<PortfolioCard
					name={"KosmoTime Clone"}
					description={
						"Clone of Nicolas Vandenberghe and Martin Plouy's KosmoTime app."
					}
					tools={"React, JavaScript, Vanilla CSS, Node, npm"}
					image={kosmotimeClone}
					link="https://kosmotime-clone.herokuapp.com/"
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
						"A browser dashboard integrated with Google that shows upcoming events, tasks, and projects. (Currently offline)"
					}
					tools={"JavaScript, HTML, CSS, Google Calendar API, Auth0, Moment.js"}
					image={dashScreen}
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
				<h2>Dylan Arveson</h2>
				<br />
				<p>
					Feel free to reach out any time! I'm currently open to work
					opportunities and would love to chat. 
				</p>
				<br />
				<p>	
					Just send me an email at the following:
				</p>
				<a
					href="mailto:dylan.arveson@gmail.com?body=Hey Dylan!"
					rel="noreferrer"
					target="_blank"
				>
					mailto: dylan.arveson@gmail.com
				</a>
				<br />
				<br />
				<p>
					You can also check out my social accounts:
				</p>
				<a
					href="https://www.github.com/dyyllaann"
					rel="noreferrer"
					target="_blank"
				>
					github.com/dyyllaann
				</a>
				<br />
				<a
					href="https://www.twitter.com/dylancodes"
					rel="noreferrer"
					target="_blank"
				>
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
			<div></div>
		</section>
	);
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
      </BrowserRouter>
    </div>
  );
}
