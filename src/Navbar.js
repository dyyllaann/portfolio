import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"

const Navbar = () => {
	return (
		<div>
			<nav>
				<Link to="/" className="expand">Home</Link>
        <Link to="/profile" className="expand">Profile</Link>
				<Link to="/info" className="expand">Info</Link>
				<Link to="/portfolio" className="expand">Portfolio</Link>
				<Link to="/contact" className="expand">Contact</Link>
			</nav>
		</div>
	);
};

export default Navbar;
