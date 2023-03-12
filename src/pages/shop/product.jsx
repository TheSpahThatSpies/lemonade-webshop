import React, { useContext } from 'react';
import './shop.css';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, CartProducts} = useContext(ShopContext);

    const productAmount = CartProducts[id]
  return (
    <div className='product'>
        <img src={productImage} />
        <div className='description'>
            <p> <b>{productName}</b></p>
            <p> {price} kr. </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
          Put in basket {productAmount > 0 && <> ({productAmount})</>}
        </button>
    </div>
  )
}