import axios from 'axios';
import contactsActions from '../contacts/contactsActions';

const baseURL = `http://localhost:4242/`;

const onAddContact = contacts => dispatch => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post(`${baseURL}contacts`, contacts)
    .then(response => {
      dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  axios
    .get(`${baseURL}contacts`)
    .then(({ data }) => {
      dispatch(contactsActions.fetchContactSuccess(data));
    })
    .catch(error => {
      dispatch(contactsActions.fetchContactError(error));
    });
};

const onRemoveContacts = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());
  axios
    .delete(`${baseURL}contacts/${id}`)
    .then(() => {
      dispatch(contactsActions.removeContactSuccess(id));
    })
    .catch(error => {
      dispatch(contactsActions.removeContactError(error));
    });
};

export default { onAddContact, fetchContacts, onRemoveContacts };
