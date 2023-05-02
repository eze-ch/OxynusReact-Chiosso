import "./itemDetail.scss";
import ".././ItemCount/ItemCount.scss";

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgChevronDoubleLeft } from "react-icons/cg";
import ItemCount from "../ItemCount/ItemCount";

import AOS from "aos";
import "aos/dist/aos.css";

import { CartContext } from '../../../Context/CartContext';



const ItemDetail = ({ item }) => {
  const { addToCart, isInCart } = useContext(CartContext)
  
  const [cantidad, setCantidad] = useState(1);

  const navigation = useNavigate();


  const handleBack = () => {
    navigation(-1);
  };

  const handleAdd = () => {
    const productInShopcart = {
      ...item,
      cantidad
    };
    addToCart(productInShopcart)
  };

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	}, []);

  return (
    <div className="det-central">
      <div className="detHead">
        <Link className="detHead__backButton" onClick={handleBack}>
          <CgChevronDoubleLeft size={50} />
        </Link>
		    <h2 className="detHead__title">{item.title}</h2>
      </div>

      <div className="detBody">
        <img
          className="detBody__img"
          src={item.image}
          alt={item.title}
        />
        <div className="detBody__info">
          <h4 className="detBody__info__title">Detalle del producto</h4>
          <p className="detBody__info__descrip">{item.description}</p>

					{
            item.stock > 3
            ?  <p className="detBody__info__stock">Stock disponible: {item.stock}</p>
            : item.stock <= 3 && item.stock > 0
              ? <p className='detBody__info__stock'>Solo quedan {item.stock} {item.stock === 1 ? 'unidad' : 'unidades'}</p>
              : item.stock <= 0 && <p className='detBody__info__stock'>Sin stock</p>
          }

          {
            isInCart(item.id)

              ? <div>
                <Link to="/carrito" className='detBuy__shopCart'>Ir al Carrito</Link>
              </div>

              : item.stock === 0
                ? <div className='hidden'></div>
                : <ItemCount
                  stockMax={item.stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  handleAdd={handleAdd}
                  id={item.id}
                  isInCart={isInCart}
                />
          }

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
