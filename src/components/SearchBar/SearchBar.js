import React from 'react';
import PropTypes from 'prop-types';

import { Search } from './style';

const SearchBar = ({value, onChange, onClick}) => {
  return(
    <Search>
      <input
        className="search__input"
        type="text"
        placeholder="Find your city..."
        value={value}
        onChange={onChange}
      />
      <button
        className="button--default"
        type="button"
        onClick={onClick}
      >
        Get Weather
      </button>
    </Search>
  );
};

export default SearchBar;


SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
