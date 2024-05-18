import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint: string, params: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    // url: "http://127.0.0.1:8080" + endpoint,
    url: "https://api.redsols.us" + endpoint,
    params: params,
  };
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
