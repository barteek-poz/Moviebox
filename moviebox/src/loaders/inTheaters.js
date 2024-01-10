const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_API_KEY
    }
  };
  
  export const inTheaters = () => {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  };
  

    