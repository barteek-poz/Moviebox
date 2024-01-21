import styles from "../Navigation/Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";

//naprawic stan active linkow
export const Navigation = () => {
  return (
    <div className={styles.navBackground}>
      <CenteredContent>
        <nav className={styles.navBar}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className={styles.navLinks}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.navLink}`
              }>
              Movies
            </NavLink>
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.navLink}`
              }>
              TV Shows
            </NavLink>
            <NavLink
              to="/streaming"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.navLink}`
              }>
              Streaming
            </NavLink>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.navLink}`
              }>
              Watchlist
            </NavLink>

            <div>
              <img src={search} alt="search-icon" className={styles.navIcon} />
              <input
                className={styles.navInput}
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
        </nav>
      </CenteredContent>
    </div>
  );
};
