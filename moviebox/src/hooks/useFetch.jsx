import { useState, useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY,
  },
};
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(url, options);
      const resData = await res.json();
      setData(resData);
    };
    dataFetch();
  }, [url]);

  return { data };
};

export default useFetch;
