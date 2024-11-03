import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const EditContact = () => {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": "",
        "id": ""
    })

    useEffect(() => {
        const contactToEdit = store.contacts.find(contact => contact.id == params.contactId);
        console.log(contactToEdit);
        setContact(contactToEdit);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editContact(contact);
        console.log("actualizando contacto", contact);
        navigate("/");
    };

    function handleChange(e) {
        setContact({
            ...contact,
            [e.target.id]: e.target.value
        })
    };

    return (
        <div>
            <div className="container m-5 " >
                <h1 className="display-5 text-center mb-2">Editar contacto</h1>
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
                    <div className="d-flex justify-content-evenly">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <Link to="/">
                            <button type="button" className="btn btn-outline-secondary">Cancelar</button>
                        </Link> 
                    </div>
                </form>

            </div>
        </div>
    )
}

export default EditContact