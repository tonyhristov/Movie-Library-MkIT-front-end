import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import styles from './index.module.css'
import getFavorites from '../../utils/getFavorites'
import getMovie from '../../utils/getMovie'

const FavouritesAuth = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([])
    const params = useParams()


  const getFavoriteMovies = useCallback(async () => {
      const favorites = await getFavorites(params.userId);
        favorites.map(async (favorite) => {
        const fetch = await getMovie(favorite)
        setFavoriteMovies(oldArr=>[...oldArr, fetch])
      })
  }, [])

  const renderChats = () => {
        return favoriteMovies.map( (favorite) => {
          const image = favorite.image.medium
          const movieId = `${params.userId}/movie-details/${favorite.id}`
            return (
              <Link to={movieId}>
              <img src={image} alt="Logo" className={styles.image} />
              </Link>
                )
          })
  };

  useEffect(() => {
    getFavoriteMovies()
  }, [getFavoriteMovies])


    return (
    <div>
        <div className={styles.center}>
            <h1 >Your Favorites</h1>
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