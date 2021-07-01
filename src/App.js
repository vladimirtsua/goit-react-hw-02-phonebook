import React, { Component } from 'react';
import ContactForm from './component/form';
import ContactList from './component/ContactList';
import Filter from './component/filter';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
	};

	handleForm = ({ name, number }) => {
		const newContact = {
			id: uuidv4(),
			name,
			number,
		};

		this.state.contacts.find((contact) => contact.name === newContact.name)
			? alert(`${name} is already in contacts`)
			: this.setState((prevState) => ({
					contacts: [newContact, ...prevState.contacts],
			  }));
	};

	changeFilter = (e) => {
		this.setState({ filter: e.currentTarget.value });
	};

	delContact = (contactId) => {
		this.setState(({ contacts }) => ({
			contacts: contacts.filter((contact) => contact.id !== contactId),
		}));
	};
	render() {
		const { contacts, filter } = this.state;
		const normalizedFilter = filter.toLowerCase();
		const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));

		return (
			<section>
				<h1>Phonebook</h1>
				<ContactForm onSubmit={this.handleForm} />

				<h2>Contacts</h2>
				<Filter value={this.state.filter} onChange={this.changeFilter} />
				<ContactList contacts={visibleContacts} delContact={this.delContact} />
			</section>
		);
	}
}
export default App;