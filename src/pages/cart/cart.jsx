import React, { useContext, useState } from 'react';
import { productList } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import Checkout from './checkout';

export const Cart = () => {
  const {CartProducts, getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()
  const [openCheckout, setOpenCheckout] = useState(false)

  return (
    <div className="cart">
        <div>
          <h1 className='drinkorder'>Your order</h1>
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
          <p className='total'> Total: {totalAmount} Kr.</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button onClick={() => {setOpenCheckout(true)}}> Checkout</button>
          {openCheckout && <Checkout closeCheckout={setOpenCheckout}/>}
        </div>
      ) : (
        <h1>Nothing in basket.</h1>
      )}
    </div>
  )
}
