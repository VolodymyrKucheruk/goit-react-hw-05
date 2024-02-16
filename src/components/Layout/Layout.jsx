import { Link, NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css"

export default function Layout() {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={css.home}to="/">Home</NavLink>
          <NavLink className={css.movies}to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />

    </>
  );
}
