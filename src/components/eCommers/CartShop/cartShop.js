import './cartShop.scss'

import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';


export const CartShop = () => {
	const { cart, totalProduct, subTotal, emptyCart, updateQuantity, deleteProduct } = useContext(CartContext)

	if (cart.length === 0) {
		return <div>
			<div className='carr-central'>
				<span className='shopCart_empt '>Carrito vacío</span>
				<Link className='shopCart_linkProducts' to="/productos">¡Vea nuestros productos!</Link>
			</div>
		</div>
	}


	return (
    <section className="carr-central">
        
    <div className="shopcart__products">
      <div  className="shopcart__products"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
        {
          cart.map((prod) => (
            <CartItem
              key={prod.id}
              {...prod}
              totalProduct={totalProduct}
              updateQuantity={updateQuantity}
              deleteProduct={deleteProduct}
            />
          ))
        }
      </div>
    </div>

    <div className="shopcart__interaction">
        <div className="shopcart__interaction__left">
            <button className="shopcart__interaction__delete" onClick={emptyCart}>Vaciar carrito</button>
        </div>
        <div className="shopcart__interaction__rigth">
            <div className="shopcart__interaction__total">
                <p>Total: ${subTotal()}</p>
            </div>
            <Link to={"/checkout"}><button className="shopcart__interaction__buy">Comprar</button></Link>
        </div>
    </div>

  </section>

	)
};

