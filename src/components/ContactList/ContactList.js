import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={styles.Contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.Contacts__item}>
        <p className={styles.Contacts__data}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={styles.Contacts__button}
          onClick={() => onDeleteContacts(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
