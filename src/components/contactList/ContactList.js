import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from '../contactForm/contactListItem/ContactListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import slideTransition from '../../transitions/slide.module.css';
import constansSelector from '../../../src/redux/contacts/constansSelector';
import constansOperation from '../../../src/redux/contacts/constansOperation';

const ContactList = ({ contacts, onRemoveContacts }) => (
  <>
    <TransitionGroup component="ul">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContacts(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

const mapStateToProps = state => {
  return {
    items: constansSelector.getContacts(state),
    contacts: constansSelector.getFilteredContacts(state),
  };
};

const mapDispatchToProps = {
  onRemoveContacts: constansOperation.onRemoveContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
