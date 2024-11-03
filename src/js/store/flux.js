import EditContact from "../views/EditContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactToDelete: {},
			idDelete: "",
		},
		actions: {

			getContacts: () => {
				fetch('https://playground.4geeks.com/contact/agendas/margarita1973')
					.then((response) => { return response.json() })
					.then((data) => {
						console.log(data)
						setStore({ contacts: data.contacts })
					})
					.catch((error) => { console.log(error) })
			},

			createContact: (contact) => {

				fetch("https://playground.4geeks.com/contact/agendas/margarita1973/contacts", {
					method: 'POST',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json'
					},
				})
					.then((response) => {
						console.log(response);
						return response.json()
					})
					.then((data) => {
						console.log(data);
						const actions = getActions();
						actions.getContacts();
						console.log("lista actualizada");

					})
					.catch((error) => { console.log(error) })
			},
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/margarita1973/contacts/${id}`, {
					method: 'DELETE',
					headers: { 'Content-Type': 'application/json' }
				})
					.then((response) => { return response.json() })
					.then((data) => {
						console.log(data);
					})
					.catch((error) => { console.log(error) });
				const actions = getActions();
				actions.getContacts();
			},

			editContact: (contact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/margarita1973/contacts/${contact.id}`, {
					method: 'PUT',
					body: JSON.stringify(contact),
					headers: { 'Content-Type': 'application/json' }
				})
				.then((response) => {
					console.log(response);
					return response.json()
				})
				.then((data) => {
					console.log(data);
					const actions = getActions();
					actions.getContacts();
					console.log("lista actualizada");

				})
				.catch((error) => { console.log(error) })

			}
		}
	};
};

export default getState;
