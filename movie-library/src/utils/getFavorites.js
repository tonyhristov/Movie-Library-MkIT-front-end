const getFavorites = async (userId) => {
    const promise = await fetch(`http://localhost:9999/api/favorites/getFavorites/${userId}`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      }
    });
    const favorites = await promise.json();
    
    return favorites;
  };
  
  export default getFavorites;