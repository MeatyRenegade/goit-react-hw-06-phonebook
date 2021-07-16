import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Container from './components/Container';
import Filter from './components/Filter';
import styles from './App.module.css';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  componentDidUpdate(prevProps, _) {
    if (this.props.contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  render() {
    return (
      <Container>
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.header}>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(App);
