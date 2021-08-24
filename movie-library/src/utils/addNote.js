const addNote = async (userId, movieId, note) => {
    try {
        const promise = await fetch("http://localhost:9999/api/notes/addNote", {
          method: "PUT",
          body: JSON.stringify({
            "userId": userId,
            "movieId": movieId,
            "note": note
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
  
  export default addNote;