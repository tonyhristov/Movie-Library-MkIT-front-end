import React, { useContext} from "react";
import {  useHistory, useParams } from "react-router-dom";
import UserContext from "../../context";
import styles from './index.module.css'
import LinkComponent from '../link';
import ImageBackground from '../background-image';

const WelcomeAuth = () => {
  const context = useContext(UserContext);
  const history = useHistory();
  const params = useParams()

  const logOut = () => {
    context.logout();
    history.push("/");
  };

    return (
      <ImageBackground page="welcome-component">
        <div className={styles.home}>
          <h1 className={styles["h1"]}>Home</h1>
          <h3 className={styles["h3"]}>This is the Home page for LoggedIn users.</h3>
          <LinkComponent
            key="Search"
            href={`/${params.userId}/search/`}
            title="Search"
            type={"button"}
          />

          <button className={styles.button} onClick={logOut}>
            Logout
          </button>
        </div>
      </ImageBackground>
    )
 }

 export default WelcomeAuth