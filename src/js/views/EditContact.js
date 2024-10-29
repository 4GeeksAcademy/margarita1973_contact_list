
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const EditContact = () => {
    const params = useParams();
    const { store, actions } = useContext(Context)

    const contactToEdit = store.contact[params.id]

    return (
        <div>
             {/* <div className="container m-5 " >
                <h1 className="display-5 text-center mb-2">Agregar un nuevo contacto</h1>
                <form onSubmit={createContact}>
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
                        <button type="submit" className="btn btn-primary" >Guardar</button>
                    </div>
                </form>
                <Link to="/">
                    <p><a className="link-opacity-10-hover" >Volver a contactos</a></p>
                </Link> 
            </div>*/}
        </div>
    )
}

export default EditContact