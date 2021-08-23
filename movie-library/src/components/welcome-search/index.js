import React from 'react'
import styles from './index.module.css'
import LinkComponent from '../../components/link';
import ImageBackground from '../../components/background-image';

const WelcomeSearch = () => {
    return (
       
          <ImageBackground page="welcome-component">
              <div className={styles.home}>
                 <h1 className={styles["h1"]}>Home</h1>
                 <h3 className={styles["h3"]}>This is the Home page, when the user is not loggedIn.</h3>
                 <LinkComponent
               key="Search"
               href="/search"
               title="Search"
               type={"button"}
             />
              </div>
              </ImageBackground>
       
    )
 }

 export default WelcomeSearch