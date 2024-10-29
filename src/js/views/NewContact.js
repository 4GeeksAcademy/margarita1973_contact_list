import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Context} from "../store/appContext";

const NewContact = () => {
    const navigate = useNavigate();
    const {store, actions} = useContext(Context)

    const [contact, setContact] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    });

     function handleChange(e) {

       setContact({
            ...contact,
             [e.target.id]: e.target.value
        })
     };
    console.log(contact);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log ("enviando contacto", contact);
        actions.createContact(contact);
        navigate("/");
    };

    // function createContact(e) {
    //     e.preventDefault();
    //     fetch("https://playground.4geeks.com/contact/agendas/margarita1973/contacts", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(contact)

    //     })
    //         .then((response) => { return response.json() })
    //         .then((data) => {
    //             console.log(data);
    //             actions.getcontacts();
    //             navigate(" / ");
    //         })
    //         .catch((error) => { console.log(error) })
    // }

    return (
        <div className="container m-5 " >
            <h1 className="display-5 text-center mb-2">Agregar un nuevo contacto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="name" aria-label="fullName" value={contact.name}
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-label="emailAdress" value={contact.email}
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone" aria-label="phoneNumber" value={contact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="address" aria-label="address" value={contact.address}
                        onChange={handleChange} />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary"> Guardar </button>
                </div>
            </form>
            <Link to="/">
                <p><a className="link-opacity-10-hover" >Volver a contactos</a></p>
            </Link>
        </div>
    )
}

export default NewContact