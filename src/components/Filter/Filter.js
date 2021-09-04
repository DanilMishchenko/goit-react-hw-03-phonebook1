import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label className={styles.Filter__label}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
