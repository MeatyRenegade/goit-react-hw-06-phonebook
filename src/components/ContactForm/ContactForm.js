import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contacts-actions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name:{' '}
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name and Surname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number:{' '}
          <input
            className={styles.input}
            type="tel"
            name="number"
            placeholder="+371-123-123-123"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может 
             с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: allContacts => dispatch(addContact(allContacts)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
