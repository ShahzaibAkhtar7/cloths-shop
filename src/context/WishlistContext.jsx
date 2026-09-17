import { createContext, useContext, useState, useCallback } from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);

  const toggle = useCallback((product) => {
    setItems((prev) =>
      prev.find((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );
  }, []);

  const isWished = useCallback((id) => items.some((i) => i.id === id), [items]);

  return (
    <WishlistContext.Provider value={{ items, toggle, isWished }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
