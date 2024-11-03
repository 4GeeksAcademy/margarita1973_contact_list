import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/Card.js";

const Home = () => {

	const { store, actions } = useContext(Context)


	return (
		<div className="container-fluid bg-secondary">
		<div className="container agenda col-md-12 col-lg-8 m-auto mt-3">
			<div className="d-flex justify-content-end">
				<Link to="/New-Contact">
					<button className="btn btn-success">Agregar contacto</button>
				</Link>
			</div>
			<div className="container ">
				<ul className="list-group m-2">
					{store.contacts.map((contact, i) => {
						return (
							<Card
								key={i}
								id={contact.id}
								name={contact.name}
								address={contact.address}
								phone={contact.phone}
								email={contact.email}
							/>
						)
					})}

				</ul>
			</div>
		</div>
		</div>
	);
}

export default Home
