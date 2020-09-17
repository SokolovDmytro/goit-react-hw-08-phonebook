import contactsConstans from './contactsConstans';

const deleteContact = (id) => ({
  type: contactsConstans.DEL,
  payload: {
    id,
  },
});

const filter = filter => {
  return {
    type: contactsConstans.FILTER,
    payload: {
      filter,
    },
  };
};

const duplicate = () => ({
  type: contactsConstans.DUPLICATE,
});

const addContactRequest = () => {
  return {
    type: contactsConstans.ADD_CONTACT_REQUEST,
  };
};

const addContactSuccess = contacts => {
  return {
    type: contactsConstans.ADD_CONTACT_SUCCESS,
    payload: {
      ...contacts,
    },
  };
};

const addContactError = error => {
  return {
    type: contactsConstans.ADD_CONTACT_ERROR,
    payload: { error },
  };
};

const fetchContactRequest = () => {
  return {
    type: contactsConstans.FETCH_CONTACT_REQUEST,
  };
};

const fetchContactSuccess = contacts => {
  return {
    type: contactsConstans.FETCH_CONTACT_SUCCESS,
    payload: contacts,
  };
};

const fetchContactError = error => {
  return {
    type: contactsConstans.FETCH_CONTACT_ERROR,
    payload: { error },
  };
};

const removeContactRequest = () => {
  return {
    type: contactsConstans.DEL_CONTACT_REQUEST,
  };
};

const removeContactSuccess = id => {
  return {
    type: contactsConstans.DEL_CONTACT_SUCCESS,
    payload: id,
  };
};

const removeContactError = error => {
  return {
    type: contactsConstans.DEL_CONTACT_ERROR,
    payload: { error },
  };
};

export default {
  deleteContact,
  filter,
  duplicate,

  addContactRequest,
  addContactSuccess,
  addContactError,

  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

  removeContactError,
  removeContactSuccess,
  removeContactRequest,
};
