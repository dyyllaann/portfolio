import React from "react";
import styled, { keyframes } from 'styled-components';

export default function DeveloperAnimation() {
  const reactArray = "Developer".split("");

  return (
		<Wrapper>
			{
      reactArray.map(
				(item, index) => (
					<span key={index}>{item}</span>
				)
			)}
		</Wrapper>
	);
}

const animation = keyframes`
  0% { transform: translateY(7.5em); }
  100% { transform: translateY(0) }
`

const Wrapper = styled.span`
	display: inline-block;
	overflow: hidden;
	text-transform: uppercase;
	font-family: "Helvetica Neue", Geneva, Tahoma, sans-serif;
	font-weight: 500;
	font-size: 7.5em;
	line-height: 0.875;
	color: #1f3541;

	span {
		transform: translateY(6em);
		display: inline-block;
		animation-name: ${animation};
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
	}

	span:nth-child(1) {
		animation-delay: 0s;
	}

	span:nth-child(2) {
		animation-delay: 0.2s;
	}

	span:nth-child(3) {
		animation-delay: 0.3s;
	}

	span:nth-child(4) {
		animation-delay: 0.4s;
	}

	span:nth-child(5) {
		animation-delay: 0.5s;
	}

	span:nth-child(6) {
		animation-delay: 0.6s;
	}

	span:nth-child(7) {
		animation-delay: 0.7s;
	}

	span:nth-child(8) {
		animation-delay: 0.8s;
	}

	span:nth-child(9) {
		animation-delay: 0.9s;
	}
`;