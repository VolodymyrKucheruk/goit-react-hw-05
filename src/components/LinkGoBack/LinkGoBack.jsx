import { NavLink } from "react-router-dom";
import css from "./LinkGoBack.module.css";

export const BackLink = ({ href, children }) => {
  return (
    <NavLink className={css.button} to={href}>
      {children}
    </NavLink>
  );
};
