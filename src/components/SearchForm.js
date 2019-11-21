import React from "react";

function SearchForm(props) {
  return (
    <section className="search-form">
      <form onSubmit={props.onSubmit}>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search by name"
          onChange={props.onChange}
          value={props.value}
        />
      </form>
    </section>
  );
}

export default SearchForm;
