import PropTypes from 'prop-types';
import { Input } from 'components/ContacForm/ContactForm.styled';
// import { Component } from 'react';
import React from 'react';
import { FilterLabel} from './Filter.styled';

const Filter = ({ filter, onFilter }) => {
  // render()
  // {
    // const { filter, handleFilter } = this.props;

    return (
      <>
        <FilterLabel>Find contacts by name</FilterLabel>
        <Input type="text" onChange={onFilter} value={filter} id="filter" />
      </>
    );
  }
// }

  export default Filter;

  Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };
  
