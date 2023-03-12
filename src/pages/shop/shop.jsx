import React from 'react';
import { productList } from '../../products';
import { Product } from './product';
import logo from './logo.png';

export const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <img className="shopLogo" src={logo} alt="logo"></img>
            <h1>LemonAte</h1>
        </div>
        <div className="products">
            {productList.map((product) => (
                <Product data={product} />
            ))}
        </div>
    </div>
  )
}
