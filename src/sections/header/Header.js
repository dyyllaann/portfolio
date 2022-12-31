import React, { useEffect } from "react";

export default function Header() {
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
				{window.matchMedia("(max-width: 550px)").matches
					? "D.A."
					: "Dylan Arveson"}
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
