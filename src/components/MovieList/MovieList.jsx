import css from "./MovieList.module.css";
import noPicture from "../image/unnamed.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={`/movies/${item.id}`}
          state={{ from: location }}
        >
          <div className={css.card}>
            <li className={css.cardInner}>
              <div className={css.cardFront}>
                <img
                  className={css.img}
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : `${noPicture}`
                  }
                />
              </div>
              <div className={css.cardBack}>
                <p className={css.title}> {item.title}</p>
                <p className={css.date}>Date of release: {item.release_date}</p>
              </div>
            </li>
          </div>
        </NavLink>
      ))}
    </ul>
  );
};
