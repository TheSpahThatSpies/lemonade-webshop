import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import "./cart.css";

export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {CartProducts, addToCart, deleteFromCart, updateCartProductCount} = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage} alt="product"/>
        <div className="description">
            <p><b> {productName} </b></p>
            <p> {price} kr.</p>
            <div className='countHandler'>
                <button className='plusminus' onClick={() => deleteFromCart(id)}> - </button>
                <input value={CartProducts[id]} onChange={(e) => updateCartProductCount(Number(e.target.value), id)}/>
                <button className='plusminus' onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  );
};