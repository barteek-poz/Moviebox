import styles from "../Navigation/Navigation.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import logo from "../../assets/logo.svg";
import { useNavSearch } from "../../hooks/useNavSearch";
import { useEffect, useRef, useState } from "react";
import { SearchedTitle } from "../SearchedTitle/SearchedTitle";

export const Navigation = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchedTitles = useNavSearch(inputValue);
  const navigate = useNavigate();
  const ref = useRef(null);

  const searchHandler = (event) => {
    if (event.key === "Enter" && inputValue.length > 0) {
      navigate(`/search/${inputValue}`);
      setInputValue("");
    }
  };

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsFocused(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  return (
    <div className={styles.navBackground}>
      <CenteredContent>
        <nav className={styles.navBar}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
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

            <div className={styles.searchBox} ref={ref}>
              <input
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                className={styles.navInput}
                type="text"
                name="search"
                placeholder="Search"
                onKeyUp={searchHandler}
              />
              <div className={styles.searchResults}>
                {searchedTitles &&
                  isFocused &&
                  searchedTitles.slice(0, 4).map((title) => {
                    return (
                      <div
                        key={title.id}
                        onClick={() => {
                          setIsFocused(false);
                          
                        }}>
                        <SearchedTitle titleData={title} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </nav>
      </CenteredContent>
    </div>
  );
};
