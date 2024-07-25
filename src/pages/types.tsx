import { AxiosRequestConfig } from "axios";

export interface ImageContextType {
  response: any[];
  isLoading: boolean;
  error: string;
  fetchData: (customUrl?: string, customConfig?: AxiosRequestConfig) => void;
}
