import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const Card = (props) => {
	const {store, actions } = useContext(Context)
	const handleClick = (e) => {
		actions.deleteContact(props.id)
	}

	// function deleteContact(id) {
	// 	fetch(`https://playground.4geeks.com/contact/agendas/margarita1973/contacts/${id}`, {
	// 		method: 'DELETE',
	// 		headers: { 'Content-Type': 'application/json' }
	// 	})
	// 		.then((response) => { return response.json() })
	// 		.then((data) => {
	// 			console.log(data);
	// 		})
	// 		.catch((error) => { console.log(error) });

	// 	actions.getContacts();
	// }


	return (
		<div>
			<li key={props.id} className="list-group-item row d-flex">
				<div className="card col-10 border-none">
					<div className="row d-flex ">
						<div className="col-4 col-sm-3">
							<img src="https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_1280.png" className="img-fluid w-100" />
						</div>
						<div className="col-8 col-sm-9 ">
							<div className="card-body">
								<h5 className="fullname mb-2">{props.name}</h5>
								<p className="address mb-1">{props.address}</p>
								<p className="phone mb-1">{props.phone}</p>
								<p className="email"><small className="text-muted">{props.email}</small></p>
							</div>
						</div>
					</div>
				</div>
				<div className=" col-2 d-flex justify-content-end">
					<Link to={`/Edit-Contact/:${props.id}`}>
						<i className="fa fa-solid fa-pencil m-3" style={{ color: "black" }} />
					</Link>
					<button className="btn btn-link" onClick={handleClick}> <i className=" fa fa-solid fa-trash-can mt-0" /> </button>
				</div>
			</li>
		</div>
	)
}

export default Card