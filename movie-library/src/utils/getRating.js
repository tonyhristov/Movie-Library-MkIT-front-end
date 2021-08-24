const getRating = async (userId, movieId) => {
    const promise = await fetch(`http://localhost:9999/api/rating/getRating`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        "userId": userId,
        "movieId": movieId
      }
    });
    const rating = await promise.json();
    
    return rating;
  };
  
  export default getRating;