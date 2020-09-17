import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsOperation from '../../redux/contacts/constansOperation';
import contactsSelector from '../../redux/contacts/constansSelector';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  changeAlertFn = () => {
    this.props.switchAlert();
    setTimeout(() => {
      this.props.switchAlert();
    }, 2500);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.duplicateFn()) {
      this.props.onAlert();
      setTimeout(() => {
        this.props.onAlert();
      }, 1500);
    } else {
      this.props.onAddContact({ ...this.state });
      this.setState({ name: '', number: '' });
    }
  };

  duplicateFn = () => {
    return this.props.contacts.some(
      contacts => contacts.name.toLowerCase() === this.state.name.toLowerCase(),
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>NAME</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h2>NUMBER</h2>
          <input
            type="tel"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="number"
            // placeholder="123-321-1111"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelector.getContacts(state),
  };
};

const mapDispatchToProps = {
  onAddContact: contactsOperation.onAddContact,
  onAlert: contactsActions.duplicate,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
};
