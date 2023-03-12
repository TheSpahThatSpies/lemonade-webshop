import React, { useContext } from 'react';
import { productList } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';

export const Cart = () => {
  const {CartProducts} = useContext(ShopContext);

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
    </div>
  )
}
