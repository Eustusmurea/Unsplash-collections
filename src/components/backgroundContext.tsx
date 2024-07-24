import React, { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState("transparent");
  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  return useContext(BackgroundContext);
};
