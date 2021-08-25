const addFavorite = async (userId, movieId) => {
    try {
        const promise = await fetch("http://localhost:9999/api/favorites/addFavorite", {
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
        alert("Something went wrong");
      }
  };
  
  export default addFavorite;