import React, { useContext } from 'react';
import { productList } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";

function Checkout({ closeCheckout }) {
  const {CartProducts, getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount()

  return (
    <div className='checkoutBackground'>
        <div className='checkoutContainer'>
          <button className='checkoutX' onClick={() => closeCheckout(false)}> X </button>
          <h1 className='checkoutTitle'>You are about to put down an order at {totalAmount} kr.<br/>Proceed?</h1>
          <div className='checkoutOptions'>
            <button onClick={() => closeCheckout(false)}>Cancel</button>
            <button onClick={() => closeCheckout(false)}>Order</button>
          </div>
        </div>
    </div>
  )
}

export default Checkout