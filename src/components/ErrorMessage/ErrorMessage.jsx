import css from "./ErrorMessage.module.css";

export const ErrorMessage = ({ message }) => {
  return <span className={css.text}>{message}</span>;
};
