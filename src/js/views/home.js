import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "./card";

const Home = () => {

const {store, actions} = useContext(Context)

	
	return (
		<div className=" m-5">
			<div className="d-flex justify-content-end">
				<Link to="/New-Contact">
					<button className="btn btn-success">Agregar contacto</button>
				</Link>
			</div>
			<ul className="list-group mt-2 ">
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
	);
}

export default Home
