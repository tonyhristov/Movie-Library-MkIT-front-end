const getMovie = async (movie) =>{
    const promise = await fetch('http://localhost:9999/api/movies/getMovie', {
        method: "GET",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          "movieid": movie
        },
        
      })

      const movies = await promise.json()

      return movies
}

export default getMovie