import React, { useContext } from 'react';
import { productList } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {CartProducts, getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()
  return (
    <div className="cart">
        <div>
          <h1> Basket</h1>
        </div>
        <div className="cartItems">
          {productList.map((product) => {
            if (CartProducts[product.id] !== 0) {
              return <CartItem data={product} />;
            }
        })}
        </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <p> Total: {totalAmount} Kr.</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button> Checkout</button>
        </div>
      ) : (
        <h1>Nothing in basket.</h1>
      )}
    </div>
  )
}
