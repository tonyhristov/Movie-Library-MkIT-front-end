const addRating = async (userId, movieId, rating) => {
    try {
        const promise = await fetch("http://localhost:9999/api/rating/addRating", {
          method: "PUT",
          body: JSON.stringify({
            "userId": userId,
            "movieId": movieId,
            "rating": rating
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await promise.json();
      } catch (e) {
        alert("Something went wrong");
      }
  };
  
  export default addRating;