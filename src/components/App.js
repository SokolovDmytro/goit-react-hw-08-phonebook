import React, { Component } from 'react';
import constansOperation from '../redux/contacts/constansOperation';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Alert from './alert/Alert';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsActions';

class App extends Component {
  filterContacts = () => {
    return this.props.items.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
    );
  };

  render() {
    return (
      <>
        {this.props.alert && <Alert alertSwitch={this.alertSwitch} />}
        <CSSTransition
          in={true}
          timeout={500}
          classNames={styles}
          appear={true}
          unmountOnExit
        >
          <p className={styles.title}>Phonebook</p>
        </CSSTransition>

        <ContactForm />
        <h2>Contacts</h2>
        {this.props.items.length > 1 && <Filter />}
        <ContactList contacts={this.filterContacts()} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    alert: state.contacts.alertStatus,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchContacts: constansOperation.fetchContacts,
    switchAlert: () => dispatch(contactsActions.duplicate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);