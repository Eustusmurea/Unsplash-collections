// src/hooks/useAxios.ts
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (url: string) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(url);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData, url]);

  return { response, isLoading, error, fetchData };
};

export default useAxios;
