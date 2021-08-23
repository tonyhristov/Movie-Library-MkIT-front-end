import React from 'react'
import styles from './index.module.css'
import image from "../../images/favourites.png"

const YourFavourites = () => {
    return (
    <div>
        <div className={styles.center}>
            <h1 >You Favorites</h1>
        </div>
        <div>
        <img src={image} alt="Logo"  className={styles.first}/>
        <img src={image} alt="Logo"  className={styles.image}/>
        <img src={image} alt="Logo"  className={styles.image}/>
        <img src={image} alt="Logo"  className={styles.image}/>
        <img src={image} alt="Logo"  className={styles.image}/>
        </div>
    </div>
    )
 }

 export default YourFavourites