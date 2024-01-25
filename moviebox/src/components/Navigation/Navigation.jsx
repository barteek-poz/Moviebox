import styles from "../Navigation/Navigation.module.css";
import { Link, NavLink, Form, useNavigate, useSearchParams} from "react-router-dom";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import logo from "../../assets/logo.svg";
import { useNavSearch } from "../../hooks/useNavSearch";
import { useState } from "react";
import { SearchedTitle } from "../SearchedTitle/SearchedTitle";

//naprawic stan active linkow
export const Navigation = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()
  const searchedTitles = useNavSearch(inputValue);
  const navigate = useNavigate()
  const submitHandler = () => {
    setSearchParams({search: inputValue})
    navigate(`search/${searchParams}`)
  }
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
            <Form action='/search' onSubmit={submitHandler}>
              <div className={styles.searchBox}>
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  className={styles.navInput}
                  type="text"
                  name="search"
                  placeholder="Search"
                  
                />
                <div className={styles.searchResults}>
                  {searchedTitles &&
                    searchedTitles.slice(0,4).map((title) => {
                      return <SearchedTitle key={title.id} titleData={title} />;
                    })}
                </div>
              </div>
            </Form>
          </div>
        </nav>
      </CenteredContent>
    </div>
  );
};
