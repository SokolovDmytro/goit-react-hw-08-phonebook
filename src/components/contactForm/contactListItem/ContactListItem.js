import React from 'react';
import styles from './ContactsList.module.css';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{name} </span>
      <span className={styles.span}>{number} </span>
      <button
        className={styles.button}
        type="button"
        id={id}
        onClick={onRemove}
      >
        X
      </button>
    </li>
  );
};
export default ContactListItem;