import React from 'react';
import { Search } from './style';

const SearchBar = ({value, onChange, onClick}) => {
  return(
    <Search>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Find your location..."
          value={value}
          onChange={onChange}
        />
        <button
          className="button"
          type="button"
          onClick={onClick}
        >
          Find
        </button>
      </div>
    </Search>
  );
};

export default SearchBar;
