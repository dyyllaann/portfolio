import './App.css';

// Image imports
import me from './images/drums.png';
import downArrow from './images/down-arrow.png';
// import todoScreen from './images/todo-screen.png';
import kosmotimeClone from './images/kosmotime-clone.gif';
import reScreen from "./images/re-screen.png";
import dashScreen from './images/dash-screen.png';
import surfScreen from './images/surf-screen.png';
import weatherScreen from './images/weather-screen.png';
import subPopClone from './images/sub-pop-clone.gif';

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
					### Hi there! I'm Dylan 👋 <br /> <br />I am a full-stack developer 
					from Port Townsend, Washington.
				</p>
				<br />
				<p>
					My tech stack includes: <br />
				</p>
				{/* <i class="devicon-amazonwebservices-plain-wordmark"></i>
				<i class="devicon-bootstrap-plain-wordmark"></i>
				<i class="devicon-css3-plain"></i>
				<i class="devicon-express-original-wordmark"></i>
				<i class="devicon-figma-plain"></i>
				<i class="devicon-firebase-plain"></i>
				<i class="devicon-git-plain-wordmark"></i>
				<i class="devicon-graphql-plain-wordmark"></i>
				<i class="devicon-html5-plain-wordmark"></i>
				<i class="devicon-javascript-plain"></i>
				<i class="devicon-jest-plain"></i>
				<i class="devicon-mongodb-plain-wordmark"></i>
				<i class="devicon-nodejs-plain-wordmark"></i>
				<i class="devicon-npm-original-wordmark"></i>
				<i class="devicon-photoshop-line"></i>
				<i class="devicon-python-plain-wordmark"></i>
				<i class="devicon-react-original-wordmark"></i>
				<i class="devicon-vscode-plain-wordmark"></i>
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="" class="devicon"/>
				<i class="devicon-webpack-plain-wordmark"></i>
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain-wordmark.svg" /> */}
				<br />
				<h2>FRONTEND:</h2>
				<p>
					HTML5, CSS3, JS ES6, React, Material UI
				</p>
				<br />
				<h2>BACKEND:</h2>	
				<p>
					Node.js, Express, MongoDB, Mongoose, GraphQL
				</p> 
				<br />
				<h2>TOOLS:</h2>
				<p>
					VS Code, Git, AWS, Figma, Jest, Photoshop
				</p>
				<br />
				<h2>OTHER:</h2>
				<p>
					Python 
				</p>
				<br />
				<p>
					In addition, I'm currently enrolled in Google's UX Design course.
					</p>
				<br />
				<p>
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
					link="https://www.github.com/dyyllaann/kosmotime-clone"
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
        <About />
        <Portfolio />
        <Contact />
      </BrowserRouter>
    </div>
  );
}
