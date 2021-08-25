const getMovies = async (movie) =>{
    const promise = await fetch('http://localhost:9999/api/movies/', {
        method: "GET",
        headers:{
          "Content-Type": "application/json",
          "movie": movie
        },
        
      })

      const movies = await promise.json()

      return movies
}

export default getMovies