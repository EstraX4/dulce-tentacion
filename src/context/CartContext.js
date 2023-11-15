import React, { createContext, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    saveLocalStorage([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
    saveLocalStorage(cart.filter((p) => p.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
    saveLocalStorage([]);
  };

  const saveLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      setCart(cartLocal);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
