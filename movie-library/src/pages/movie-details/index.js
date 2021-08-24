import React, { useCallback, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import getMovie from '../../utils/getMovie'
import removeFavorite from '../../utils/removeFavorite'
import addNote from '../../utils/addNote'
import getLastNote from '../../utils/getLastNote'


const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const [image, setImage] = useState([])
    const [genre, setGenre] = useState([])
    const [runtime, setRuntime] = useState([])
    const [notes, setNotes] = useState("")
    const [lastNote, setLastNote] = useState("")
    const params = useParams()
    const history = useHistory()

    const handleSubmit = async () => {
      await removeFavorite(params.userId, params.movieId)
      history.push(`/${params.userId}`)
    }

    const handleChangeNotes =  (event) =>{
      setNotes(event.target.value)
    }

    const handleSubmitNotes = async() => {
      await addNote(params.userId, params.movieId, notes)
    } 


    const fetchMovie = useCallback(async () => {
        const movieId = params.movieId
        const fetch = await getMovie(movieId)
        const lastNote = await getLastNote(params.userId, params.movieId)
        setLastNote(Object.values(lastNote))
        setMovie(fetch)
        setImage(fetch.image.medium)
        setGenre(fetch.genres.join(", "))
        setRuntime(fetch.runtime)
        
    }, [])
  
    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])

  return (
    <PageLayout>
        <div className={styles.container}>
        <div>
            <img src={image} alt="Logo" className={styles.image} />
        </div>
        <div className={styles.info}>
            <h1>{movie.name} ({movie.premiered})</h1>
            <div className={styles.container}>
                <p>{genre}</p>
                <p className={styles.divider}>|</p>
                <p>{runtime} minutes</p>
            </div>
            <p>{movie.summary}</p>
            <a href={movie.url} >Visit official site</a>

            <button className={styles.button} onClick={handleSubmit}>Remove From Favorites</button>
        </div>
      </div>
      <div>
        <textarea onChange={handleChangeNotes} 
        
        placeholder={lastNote? lastNote : "Your private notes and comments about the movie" }
        className={styles.textarea}
        />
        <button className={styles["button-notes"]} onClick={handleSubmitNotes}>Post Notes</button>
      </div>
    </PageLayout>
  );
};

export default MovieDetails;