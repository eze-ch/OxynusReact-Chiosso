import "./itemDetail.scss";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgChevronDoubleLeft } from "react-icons/cg";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  };

  const handleAdd = () => {
    const productInShopcart = {
      ...item,
      cantidad,
    };
    console.log(productInShopcart);
  };

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

          <p className="detBody__info__stock">Stock disponible: {item.stock}</p>

          <ItemCount
            stockMax={item.stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            handleAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
