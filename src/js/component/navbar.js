import React from "react";
import { Link } from "react-router-dom";
import margaritaImage from "../../img/margarita.png";

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-light">
			<div className="container-fluid d-inline">
				<img src={margaritaImage} alt="Logo" width="40" height="40 "className="m-2"/>
				<p className="d-inline display-6 text-body-secondary m-2"><small>Agenda Margarita</small></p>
				</div>
		</nav>
	);
};
