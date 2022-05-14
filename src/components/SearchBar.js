import React, { useState } from "react";

const SearchBar = ({ onChangeHandler, term }) => {
  return (
    <form>
      <div>
        <label>Please, select:</label>
        <input type={"text"} value={term} onChange={onChangeHandler} />
      </div>
    </form>
  );
};

export default SearchBar;
