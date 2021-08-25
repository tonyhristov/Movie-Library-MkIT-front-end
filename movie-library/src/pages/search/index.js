import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './index.module.css';
import PageLayout from "../../components/page-layout";
import Search from '../../components/search';
import getMovies from '../../utils/getMovies';
import Movie from '../../components/movie';
const SearchPage = () => {
    const [movies, setMovies] = useState([])
    const params = useParams()

    const fetchMovies = useCallback( async()=> {
       const fetch = await getMovies(params.movie)
        setMovies(fetch)
    }, [])

    const renderMovies = () => {
        if (movies.length > 0) {
          return movies.map((movie) => {
            const movieObj = movie.show
            return <Movie key={movieObj.id} {...movieObj} />;
          });
        } else {
          return (
            <h1 className={styles.empty}>No Movies at the time</h1>
          );
        }
      };

    useEffect(()=>{
        fetchMovies()
    }, [fetchMovies])

    return (
        <PageLayout>
        <div className={styles.center}>
            <h1>Search</h1>
            <Search type="body"/>
        </div>
        <div className={styles["movies-wrapper"]}>{renderMovies()}</div>;


    </PageLayout>
    )
};

export default SearchPage;