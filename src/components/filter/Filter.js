import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import constansSelector from '../../redux/contacts/constansSelector';

const Filter = ({ getFilterValue, filterValue }) => (
  <>
    <p>Find contact by name</p>
    <input
      type="text"
      onChange={e => getFilterValue(e.target.value)}
      value={filterValue}
    />
  </>
);

const mapStateToProps = state => {
  return {
    filterValue: constansSelector.getFilter(state),
  };
};

const mapDispatchToProps = {
  getFilterValue: contactsActions.filter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
