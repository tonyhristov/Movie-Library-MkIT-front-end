import React, { useEffect, useCallback, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import getFavorites from "../../utils/getFavorites";
import removeFavorite from "../../utils/removeFavorite";
import addFavorite from "../../utils/addFavorite";
import styles from "./index.module.css";

const Movie = ({ image, name, premiered, genres, runtime, url, summary, id }) => {
    const [userFavoritesMovies, setUserFavoritesMovie] = useState([])
    const params = useParams()
    const history = useHistory()

    const handleSubmitRemove = async () => {
        await removeFavorite(params.userId, id)
        history.push(`/${params.userId}`)
    }

    const handleSubmitAdd = async () => {
        await addFavorite(params.userId, id)
        history.push(`/${params.userId}`)
    }

    const button = useCallback(async() =>{
       const userFavorites = await getFavorites(params.userId);
        setUserFavoritesMovie(userFavorites)
    }, [])

    const renderButton = () => {  
            if(userFavoritesMovies.length !== 0){
                return userFavoritesMovies.map((movieId) =>{
                    if(movieId == id) {
                        return <button className={styles["button-remove"]} onClick={handleSubmitRemove}>Remove From Favorites</button>
                    }else{
                        return <button className={styles["button-add"]} onClick={handleSubmitAdd}>Add to Favorites</button>
                    }
                })
            }else{
                return <button className={styles["button-add"]} onClick={handleSubmitAdd}>Add to Favorites</button>
            }
    }

    useEffect(()=>{
        button()
    }, [button])
    
    return (
      <div className={styles.container}>
          <div>
              <Link to={`/${params.userId}/movie-details/${id}`}>
                  <img src={image ? image.medium : ""} alt="Logo" className={styles.image} />
              </Link>
          </div>
          <div className={styles.info}>
              <h1>{name} ({premiered})</h1>
              <div className={styles.container}>
                  <p>{genres.join(", ")}</p>
                  <p className={styles.divider}>|</p>
                  <p>{runtime} minutes</p>
              </div>
              <p>{summary}</p>
              <a href={url} >Visit official site</a>
  
              <div>{renderButton()}</div>
          </div>
        </div>
    )
};

export default Movie;