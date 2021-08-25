import React, { useContext } from "react";
import getNavigation from "../../utils/navigation";
import styles from "./index.module.css";
import LinkComponent from "../link";
import UserContext from "../../context";
import Search from '../../components/search';

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
        <Search type="nav"/>
      </div>
      
    </header>
  );
};

export default Header;