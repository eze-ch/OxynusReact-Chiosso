import './CartWidget.scss'

import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';



export const CartWidget = () => {

    const { productQuantity } = useContext(CartContext)

    return (
        <Link to="/carrito">
            <CiShoppingCart size={28} />
            <span className="shopNum">{productQuantity()}</span>
        </Link>	

/*         <div>
            <i className="bi bi-cart-fill"></i> <span id="shopNum" className="shopNum">3</span>
        </div> */
    )
}





