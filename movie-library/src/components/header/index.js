import React, { useContext } from "react";
import getNavigation from "../../utils/navigation";
import styles from "./index.module.css";
import LinkComponent from "../link";
import UserContext from "../../context";

const Header = () => {
  const context = useContext(UserContext);
  const { user } = context;
  const links = getNavigation(user);

  return (
    <header className={styles.navigation}>
      <div >
        {links.map((navElement) => {
          return (
            <LinkComponent
              key={navElement.title}
              href={navElement.link}
              title={navElement.title}
              type={"header"}
            />
          );
        })}
      </div>
      <div>
        <form action="/" method="get" className={styles.form}>
        <input type="text" id="header-search" placeholder="search movies" name="header-search" className={styles["form-input"]}/>
        <button type="submit" className={styles["form-button"]} >Search</button>
        </form>
      </div>
      
    </header>
  );
};

export default Header;