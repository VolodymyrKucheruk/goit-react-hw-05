import { useState } from "react";
import css from "./Search.module.css";

export const Search = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const hendleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form className={css.form} onSubmit={hendleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          id="search"
        ></input>
        <span className={css.caret}></span>
        
      </form>
    </>
  );
};
