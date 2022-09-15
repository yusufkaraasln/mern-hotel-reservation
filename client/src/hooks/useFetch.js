import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
      const fetch = async () => {
        setIsPending(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setIsPending(false);
    };
    fetch();
  }, [url]);

  const reFetch = async () => {
    setIsPending(true);

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setIsPending(false);
  };

  return { data, isPending, error, reFetch };
};
export default useFetch;


 