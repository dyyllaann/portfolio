import PortfolioCard from "./PortfolioCard";

// Image imports
import kosmotimeClone from "./images/kosmotime-clone.gif";
import reScreen from "./images/re-screen.png";
import dashScreen from "./images/dash-screen.png";
import membersScreen from "./images/members-screen.png";
import weatherScreen from "./images/weather-screen.png";
import subPopClone from "./images/sub-pop-clone.gif";

export default function Portfolio() {
	return (
		<section id="portfolio">
			<h1>Portfolio Section</h1>
			<p>
				Note: Many of the projects here are down while I migrate from Heroku to
				AWS. Thank you for your patience while I get these live again.
			</p>
			<br />
			<div className="portfolio-grid">
				<PortfolioCard
					name={`Members Only / 'HushBook'`}
					description={
						"A social media app that allows users to create an account and post anonymously."
					}
					tools={"MongoDB / Mongoose, Express, Node, Jade MVC"}
					image={membersScreen}
					link="https://members-only-production-fee3.up.railway.app/"
				/>
				<PortfolioCard
					name={"Sub Pop Mega Mart Clone"}
					description={`Clone of Sub Pop's online store, including login and Inventory 
					Management System. (Currently offline)`}
					tools={"Express, Node, MongoDB / Mongoose"}
					image={subPopClone}
					link="https://sub-pop-clone.herokuapp.com/catalog"
				/>
				<PortfolioCard
					name={"KosmoTime Clone"}
					description={`Clone of Nicolas Vandenberghe and Martin Plouy's KosmoTime app. (Currently offline)`}
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
					description={`An app that allows users to access OpenWeatherMap's API to get a real-time weather report. (Currently offline)`}
					tools={"JavaScript, HTML, CSS + flex, OpenWeatherMap API"}
					image={weatherScreen}
					link="https://github.com/dyyllaann/weather-app"
				/>
			</div>
		</section>
	);
}
