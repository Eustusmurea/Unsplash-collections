import React, { createContext } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Results from "./pages/results";
import useAxios from "./hooks/useAxios";

// Context
export const ImageContext = createContext({});

function App() {
  const { response, isLoading, error, fetchData } = useAxios({
    url: `search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  });

  const value = { response, isLoading, error, fetchData };
  console.log(response);

  return (
    <ImageContext.Provider value={value}>
      <Navbar />
      <Home />
      <Results />
    </ImageContext.Provider>
  );
}

export default App;
