import React, { useState } from "react";
import SearchBar from "./SearchBar";

const fruits = ["banana", "mango", "apple", "pinaple", "orange"];

const App = () => {
  const [term, setTerm] = useState("");

  const onChangeHandler = (event) => {
    setTerm(event.target.value);
  };

  const getFilteredFruits = () => {
    return fruits.filter((fruit) => fruit.includes(term.toLowerCase()));
  };

  const filteredFruits = getFilteredFruits();

  return (
    <div>
      <SearchBar term={term} onChangeHandler={onChangeHandler} />
      <div>
        {filteredFruits.map((filteredFruit) => (
          <li>{filteredFruit}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
