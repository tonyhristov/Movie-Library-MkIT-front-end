const getLastNote = async (userId, movieId) => {
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
  };
  
  export default getLastNote;