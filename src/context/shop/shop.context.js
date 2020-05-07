import React, { createContext, useState } from "react";
export const ShopContext = createContext();
const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);
  return (
    <ShopContext.Provider value={{ shop }}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
