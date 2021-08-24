const removeFavorite = async (userId, movieId) => {
    try {
        const promise = await fetch("http://localhost:9999/api/favorites/removeFavorite", {
          method: "PUT",
          body: JSON.stringify({
            "userId": userId,
            "movieId": movieId
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await promise.json();
      } catch (e) {
        alert("This movie is not in you list");
      }
  };
  
  export default removeFavorite;