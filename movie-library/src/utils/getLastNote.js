const getLastNote = async (userId, movieId) => {
    try{
      const promise = await fetch(`http://localhost:9999/api/notes/getNote`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        "userId": userId,
        "movieId": movieId
      }
    });
    const lastNote = await promise.json();
    return lastNote; 
    } catch(err) {
      return {"id":"Your private notes and comments about the movie"}
    }
  };
  
  export default getLastNote;