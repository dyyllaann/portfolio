import downArrow from "./images/down-arrow.png";
import FullstackAnimation from "./FullstackAnimation";
import DeveloperAnimation from "./DeveloperAnimation";
import DylanAnimation from "./DylanAnimation";
import ArvesonAnimation from "./ArvesonAnimation";

export default function Hero() {
	return (
		<section id="hero">
			{/* <div id='circle-container'> */}
			{/* </div> */}

			{/* <div className="hero-top">
				<div className="header-left">
					<h1>Full Stack Developer</h1>
				</div>
			</div> */}

			<div>
				<span>
					<FullstackAnimation />
				</span>
				<br />
				<span>
					<DeveloperAnimation />
				</span>
			</div>

			<div className="hero-center">
				<div id="background-circle"></div>
				<div id="bio">
					<p>
						Welcome! I'm Dylan 👋 <br /> <br />I am a full stack (MERN)
						developer from Washington State.
					</p>
					<br />
					<p>
						My first exposure to web development was teaching myself basic HTML
						at 12 years old to create websites for fun. Over the years, I
						continued developing my skills and applying them to more practical
						uses. Most my applications automate some facet of my life. For
						example, teaching myself Python in order to calculate matrices in my
						college Finite Mathematics course, or creating full stack apps to
						automate some of my workflow.
					</p>
					<br />
					<p>
						In 2021, I began learning data structures & algorithms and advanced
						web development with Python and MERN technologies via App Academy
						Open and The Odin Project.
					</p>
					<br />
					<p>
						I'm currently enrolled in University of Washington's Machine Learning 
						program and Google's UX Design program. 
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
					<span>
						<DylanAnimation />
					</span>
					<br />
					<span>
						<ArvesonAnimation />
					</span>
				</div>
			</div>
		</section>
	);
}