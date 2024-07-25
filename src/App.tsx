// src/App.tsx
import React, { createContext } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Results from "./pages/results";
import useAxios from "./hooks/useAxios";
import { ImageContextType } from "@/pages/types";

// Context
export const ImageContext = createContext<ImageContextType | undefined>(
  undefined
);

function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${
      import.meta.env.VITE_REACT_APP_ACCESS_KEY
    }`
  );

  const value: ImageContextType = { response, isLoading, error, fetchData };

  return (
    <ImageContext.Provider value={value}>
      <Navbar />
      <Home />
      <Results />
    </ImageContext.Provider>
  );
}

export default App;
