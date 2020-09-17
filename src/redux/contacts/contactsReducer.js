import { combineReducers } from 'redux';
import contactsConstans from './contactsConstans';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case contactsConstans.ADD_CONTACT_SUCCESS:
      return [...state, payload];

    case contactsConstans.FETCH_CONTACT_SUCCESS:
      return payload;

    case contactsConstans.DEL_CONTACT_SUCCESS:
      return state.filter(contacts => contacts.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case contactsConstans.FILTER:
      return payload.filter;

    default:
      return state;
  }
};

const alertStatus = (state = false, { type }) => {
  switch (type) {
    case contactsConstans.DUPLICATE:
      return !state;

    default:
      return state;
  }
};

const loading = (state = false, { type, payload }) => {
  switch (type) {
    case contactsConstans.ADD_CONTACT_REQUEST:
    case contactsConstans.FETCH_CONTACT_REQUEST:
    case contactsConstans.DEL_CONTACT_REQUEST:
      return true;

    case contactsConstans.ADD_CONTACT_SUCCESS:
    case contactsConstans.ADD_CONTACT_ERROR:
    case contactsConstans.FETCH_CONTACT_SUCCESS:
    case contactsConstans.FETCH_CONTACT_ERROR:
    case contactsConstans.DEL_CONTACT_SUCCESS:
    case contactsConstans.DEL_CONTACT_ERROR:
      return false;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case contactsConstans.ADD_CONTACT_ERROR:
    case contactsConstans.FETCH_CONTACT_ERROR:
    case contactsConstans.DEL_CONTACT_ERROR:
      return payload;

    case contactsConstans.ADD_CONTACT_REQUEST:
    case contactsConstans.FETCH_CONTACT_REQUEST:
    case contactsConstans.DEL_CONTACT_REQUEST:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ items, filter, alertStatus, loading, error });
