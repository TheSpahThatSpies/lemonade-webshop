import React, { createContext, useState } from 'react'
import { Product } from '../pages/shop/product';
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

  // Calculate total price.
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in CartProducts) {
        if (CartProducts[item] > 0) {
            let productInfo = productList.find((product) => product.id === Number(item));
            totalAmount += CartProducts[item] * productInfo.price
        }
    }

    return totalAmount;
  }

  const addToCart = (productId) => {
    // Collect product ID and add 1.
    setCartProducts((prev) => ({...prev, [productId]: prev[productId] + 1}));
  };

  const deleteFromCart = (productId) => {
    // Collect product ID and remove 1.
    setCartProducts((prev) => ({...prev, [productId]: prev[productId] - 1}));
  };

  const updateCartProductCount = (newAmount, productId) => {
    // Update product to manual input.
    setCartProducts((prev) => ({...prev, [productId]: newAmount}));
  };

  const contextValue = {CartProducts, addToCart, deleteFromCart, updateCartProductCount, getTotalAmount };
  return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>)
}