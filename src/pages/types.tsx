export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface ImageContextType {
  response: Photo[] | null;
  isLoading: boolean;
  error: any;
  fetchData: () => void;
}
