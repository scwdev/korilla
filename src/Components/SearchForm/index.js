import React from "react";

import "../../styles.css";

////////////////////////

const SearchForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEntry = (event) => {
    props.receiveSearch(event.target.value);
  };

  return (
    <div id="search-form">
      <form onSubmit={handleSubmit}>
        <label for="entry">Filter Receipts: </label>
        <input
          type="search"
          name="entry"
          placeholder="Customer Name"
          value={props.search}
          onChange={handleEntry}
        />
        {/* <button>Search Receipts</button> */}
      </form>
    </div>
  );
};

export default SearchForm;
