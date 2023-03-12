import React, { createContext, useState } from 'react'
import { productList } from '../products';

export const ShopContext = createContext(null);

// Set the default cart state and update automatically from productlist by ID.
const getDefaultCart = () => {
    let cart = {};
    for (let i =1; i < productList.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
  const [CartProducts, setCartProducts] = useState(getDefaultCart());

  const addToCart = (productId) => {
    // Collect product ID and add 1.
    setCartProducts((prev) => ({...prev, [productId]: prev[productId] + 1}))
  };

  const deleteFromCart = (productId) => {
    // Collect product ID and remove 1.
    setCartProducts((prev) => ({...prev, [productId]: prev[productId] - 1}))
  };

  const contextValue = {CartProducts, addToCart, deleteFromCart}
  return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>)
}