import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numderInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Phonebook__form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={styles.Phonebook__label}>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={this.numderInputId} className={styles.Phonebook__label}>
          <span>Number</span>
          <input
            type="tel"
            value={number}
            onChange={this.handleChange}
            id={this.numderInputId}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.Phonebook__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
