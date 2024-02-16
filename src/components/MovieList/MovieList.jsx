import css from "./MovieList.module.css";
import noPicture from "../image/unnamed.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.item}>
        <NavLink to={`/movies/${item.id}`} state={{ from: location }}>

            <img
              className={css.img}
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : `${noPicture}`
              }
            />
            <p className={css.title}> {item.title} </p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
