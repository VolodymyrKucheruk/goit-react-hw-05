import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import clsx from "clsx";

const Layout = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default Layout;
