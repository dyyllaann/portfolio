import './App.css';
// import me from './me.jpeg';
import about from './about.png';
import me from './drums.png';
import downArrow from './down-arrow.png';
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PortfolioCard from './PortfolioCard';

import reAppScreen from "./re-app-screen.png";

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
					window.history.pushState("hero", "hero", "/hero");
				}}
			>
				Dylan Arveson
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
  const style = {
		fontFamily: "courier",
		backgroundColor: "#22272e",
    color: "#adbac7",
		border: "1px solid black",
	};
  return (
		<section id="about">
      <div>
        <h1>About Section</h1>
      </div>
			{/* <img id="about-image" src={about} alt="About me." /> */}
      <div>
        <p style={style} id="about-paragraph">
          ### Hi there! I'm Dylan 👋  <br /> <br />
          My first exposure to web development was
          teaching myself basic HTML at 12 years old. Since then, I've created
          dozens of websites and apps that make my life easier. I had always
          considered programming a hobby and had never seriously pursued it. Now,
          20 years later, it's time to turn what I love doing into a career. 
          <br /><br />
          I am
          a graduate of Wenatchee Valley College, where I studied Math, Business
          Communication, and English. While attending, I was a recurring member of
          the Dean's List, an active member of the Phi Theta Kappa Honor Society,
          and graduated with a 3.7 GPA. Although I had never taken a credited CS
          class in college, I began learning Python in my spare time so I could
          write apps that streamlined my mathemetics courses. 
          <br /><br />
          In 2019, I began
          work as a real estate broker. While working as a broker, I examined ways
          to apply my programming background to my day-to-day tasks. Most notably,
          this includes writing software that automates many of the repeatable
          processes of a running a real estate business, such as CRM, marketing,
          and transaction coordination. 
          <br /><br />
          In 2021, I began learning full-stack web
          development via The Odin Project. The Odin Project is a self-paced, free
          open source coding curriculum. As an experiential learner, The Odin
          Project has been immensely valuable in providing a path and building a
          portfolio. The majority of repos here are from The Odin Project's
          curriculum, while many of my personal apps are hosted privately. 
          <br /><br />
          At this
          stage (April 2022), I've developed two React apps, and I've begun
          learning backend with MongoDB and Express. 
          <br /><br />
          My main interests are
          automation, PropTech, and data. My dream job would be a development role
          at a PropTech or SaaS company that values creative, collaborative input,
          that employs my multidisciplinary background, and that makes a positive
          difference in people's lives.
        </p>
      </div>
		</section>
	);
}

function Portfolio() {

  return (
		<section id="portfolio">
			<h1>Portfolio Section</h1>
			<div className='portfolio-grid'>
				<PortfolioCard 
          name={"To-Do List"} 
          description={"A to-do list based off of the design for kosmotime by this guy on dribbble.com"}
          />
				<PortfolioCard 
          name={"Real Estate Productivity App"} 
          description={"A to-do list based off of the design for kosmotime by this guy on dribbble.com"}
          image={reAppScreen}
          /> 
				<PortfolioCard 
          name={"Browser Dashboard"} 
          description={"A to-do list based off of the design for kosmotime by this guy on dribbble.com"}
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
        <div>
          <a
            href="www.linkedin.com/in/dylan-arveson"
            rel="noreferrer"
            target="_blank"
          >
            linkedin.com/in/dylan-arveson
          </a>
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
