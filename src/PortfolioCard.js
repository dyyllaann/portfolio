import React from "react"
import './PortfolioCard.css'

export default function PortfolioCard(props) {
  const description = {
    width: 'calc(23.9vh * 2)'
  }

  return (
    <div>
      <div className="imagePlaceholder">
        <img src={props.image} alt="Preview"/>
      </div>
      <h2>
        {props.name}
      </h2>
      <p style={description}>
        {props.description}
      </p>
      <br />
      <p style={description}>
        {props.description}
      </p>
    </div>
  )
}