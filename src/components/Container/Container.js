import React from 'react';
import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.Phonebook}>{children}</div>
);

export default Container;
