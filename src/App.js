import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import 'modern-normalize/modern-normalize.css';
import styles from './styles.module.css';

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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('new');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1 className={styles.Phonebook__title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={styles.Phonebook__title}>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContacts={this.deleteContacts}
        />
      </Container>
    );
  }
}

export default App;
