import React from 'react';
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
