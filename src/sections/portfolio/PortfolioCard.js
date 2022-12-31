import React from "react"
import './PortfolioCard.css'

export default function PortfolioCard(props) {
  const description = {
    width: 'calc(23.9vh * 2)'
  }

  return (
		<div className="portfolio-grid--item">
			<div className="imagePlaceholder">
				<a href={props.link} rel="noreferrer" target={"_blank"}>
					<img src={props.image} alt="Preview" />
				</a>
			</div>
			<h2>{props.name}</h2>
			<p style={description}>{props.description}</p>
			<br />
			<p style={description}>Tools: {props.tools}</p>
		</div>
	);
}