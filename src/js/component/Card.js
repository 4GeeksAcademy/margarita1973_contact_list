import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const Card = (props) => {
	const {store, actions } = useContext(Context)
	const handleClick = (e) => {
		actions.deleteContact(props.id)
	}

	
	return (
		<div>
			<li key={props.id} className="list-group-item row d-flex">
				<div className="card col-10 border-0">
					<div className="row d-flex ">
						<div className="col-4  col-sm-3 my-auto">
							<img src="https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_1280.png" className="img-fluid  border rounded-circle" />
						</div>
						<div className="col-8 col-sm-9 ">
							<div className="card-body">
								<h5 className="fullname fs-4 mb-3">{props.name}</h5>
								<p className="address fs-5 text-muted mb-1"><i className="fa-solid fa-location-dot"></i>`   {props.address}`</p>
								<p className="phone fs-5 text-muted mb-1"><i className="fa-solid fa-phone"></i>`   {props.phone}`</p>
								<p className="email fs-6 text-muted"> <i className="fa-solid fa-envelope"></i>`    {props.email}`</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" col-2 d-flex justify-content-around">
					<Link to={`/Edit-Contact/${props.id}`}>
						<i className="fa fa-solid fa-pencil mt-4" style={{ color: "black" }} />
					</Link>
					 <i className=" fa fa-solid fa-trash-can mt-4" onClick={handleClick} style={{ cursor: "pointer" }} /> 
				</div>
			</li>
		</div>
	)
}

export default Card