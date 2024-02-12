import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ isLoad }) => {
  return (
    <button className={css.loadMoreBtn} onClick={isLoad}>
      Give me more
    </button>
  );
};
