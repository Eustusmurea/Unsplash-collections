// src/App.tsx
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Results from "./pages/results";
import useAxios from "./hooks/useAxios";
import { ImageContextType } from "./pages/types";
// Context
export const ImageContext = createContext<ImageContextType | undefined>(
  undefined
);

function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `https://api.unsplash.com/search/photos?page=1&query=office&client_id=h1YylPE0VA-wM4FfOEsTiMEJVPt_PACB3-2i0PhAoYA`
  );

  const value: ImageContextType = { response, isLoading, error, fetchData };

  return (
    <ImageContext.Provider value={value}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home photos={[]} />} />
          <Route path="/results" element={Results} />
        </Routes>
      </Router>
    </ImageContext.Provider>
  );
}

export default App;
