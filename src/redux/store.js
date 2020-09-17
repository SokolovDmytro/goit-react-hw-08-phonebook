import { createStore, combineReducers, applyMiddleware } from 'redux';
import contactsReducer from './contacts/contactsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const store = createStore(contactsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
