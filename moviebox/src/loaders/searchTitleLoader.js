export const searchTitleLoader = (params) => {
  
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_API_KEY,
        },
      };
      return fetch(`https://api.themoviedb.org/3/search/multi?query=${params}&include_adult=false&language=en-US&page=1`, options).then(res=>res.json());
}