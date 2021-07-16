import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.module.css';

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // duplicateContactCheck = subContact => {
  //   const value = subContact.name.toLowerCase();
  //   const nameCheck = this.state.contacts.find(contact =>
  //     contact.name.toLowerCase().includes(value),
  //   );

  //   nameCheck
  //     ? alert(`${nameCheck.name} is already in contacts`)
  //     : this.addContact(subContact);
  // };

  render() {
    return (
      <div className={styles.App}>
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm />

        <h2 className={styles.header}>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    );
  }
}

export default App;
