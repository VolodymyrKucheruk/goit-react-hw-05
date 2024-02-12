import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.querySelector('input[type="text"]').value.trim();
    if (query === "") {
      toast.error("Please write something here");
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <span className={css.transition}></span>
          <span className={css.gradient}></span>
          <span className={css.label}>🔎</span>
        </button>
      </form>
    </header>
  );
};
