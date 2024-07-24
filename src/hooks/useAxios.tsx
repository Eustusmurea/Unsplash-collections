import React, { useEffect, useState, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

const useAxios = (url: AxiosRequestConfig<unknown>) => {
  const [response, setResponse] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, isLoading, error, fetchData };
};

export default useAxios;
