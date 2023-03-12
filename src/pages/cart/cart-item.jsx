import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import "./cart.css";

export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {CartProducts, addToCart, deleteFromCart} = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className="description">
            <p><b> {productName} </b></p>
            <p> {price} kr.</p>
            <div className='countHandler'>
                <button onClick={() => deleteFromCart(id)}> - </button>
                <input value={CartProducts[id]}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  );
};