import { createContext, useState } from "react";

export const CartContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
