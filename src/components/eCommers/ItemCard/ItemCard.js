import "./ItemCard.scss";
import { Link, useParams } from "react-router-dom";

export function ItemCard({
  id,
  image,
  title,
  description,
  category,
  price,
  quantity,
  stock,
}) {
  
  const formatoPrecio = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <div className="product">
      <div className="product__img">
        <img src={image} alt={title}></img>
      </div>
      <div className="product__text">
        <h4 className="product__title">{title}</h4>
        {/* <p className="product__descrip">{description}</p> */}
        <p className="product__cost">Precio: {formatoPrecio}</p>
        <p className="product__cost">Stock: {stock}</p>
      </div>
      <button className="product__buttonDetail"><Link to={`/detalle/${id}`}> Ver producto </Link></button>
      </div>
  );
}

export default ItemCard;
