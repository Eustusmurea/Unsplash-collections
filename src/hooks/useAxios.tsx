// src/hooks/useAxios.ts
import { useEffect, useState, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { ImageContextType } from "@/pages/types";

const useAxios = (
  initialUrl: string,
  initialConfig: AxiosRequestConfig = {}
): ImageContextType => {
  const [url, setUrl] = useState<string>(initialUrl);
  const [config, setConfig] = useState<AxiosRequestConfig>(initialConfig);
  const [response, setResponse] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(
    async (customUrl?: string, customConfig?: AxiosRequestConfig) => {
      setIsLoading(true);
      try {
        const finalUrl = customUrl || url;
        const finalConfig = { ...config, ...customConfig };
        const res = await axios(finalUrl, finalConfig);
        setResponse(res.data.results);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, isLoading, error, fetchData };
};

export default useAxios;
