import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div className="nav">
        <div className="links">
            <Link to="/"> Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}></ShoppingCart>
            </Link>
        </div>
    </div>
  )
}
