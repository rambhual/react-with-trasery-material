import React, { createContext, useState } from "react";
export const DirectoryContext = createContext();
const DirectoryProvider = ({ children }) => {
  const [directory, setDirectory] = useState([]);
  return (
    <DirectoryContext.Provider value={{ directory }}>
      {children}
    </DirectoryContext.Provider>
  );
};

export default DirectoryProvider;
