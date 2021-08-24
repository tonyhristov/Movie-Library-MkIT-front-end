import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styles from './index.module.css'
import getFavorites from '../../utils/getFavorites';
import getMovie from '../../utils/getMovie';

const FavouritesAuth = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const params = useParams();


    const getFavoriteMovies = useCallback(async () => {
        const favorites = await getFavorites(params.userId);
        favorites.map(async (favorite) => {
            const fetch = await getMovie(favorite)
            setFavoriteMovies(oldArr=>[...oldArr, fetch.image.medium])
            })
      }, []);

  const renderChats = () => {
        return favoriteMovies.map( (favorite) => {
            return (
                <img src={favorite} alt="Logo" className={styles.image} />
                );
          })
  };

  useEffect(() => {
    getFavoriteMovies();
  }, [getFavoriteMovies]);


    return (
    <div>
        <div className={styles.center}>
            <h1 >You Favorites</h1>
        </div>
        <div>
        <div>
          <div >{renderChats()}</div>;
        </div>
        </div>
    </div>
    )
 }

 export default FavouritesAuth