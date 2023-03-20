import "./ItemCount.scss"
import { useState } from "react";
import { Link } from 'react-router-dom';
import { CgRemove, CgAdd } from "react-icons/cg";

const ItemCount = ({ stockMax, cantidad, setCantidad, handleAgregar }) => {

	

	const incrementar = (  ) => {
		cantidad < stockMax && setCantidad(cantidad + 1);
	};

	const decrementar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	};


	return (
		<div className="detBuy">
			<div className="detBuy__quantity">
				<label className="detBuy__quantity__label">Cantidad: </label>
				<button className="detBuy__quantity_sig" onClick={decrementar}>
					<CgRemove size={25} />
				</button>
				<span className="detBuy__quantity__num"> {cantidad} </span>
				<button className="detBuy__quantity_sig" onClick={incrementar}>
					<CgAdd size={25} />
				</button>
			</div>
			<div className="detBuy__shopCart">
				<Link className='deetBuy__shopCart__button' onClick={handleAgregar}>Agregar al Carrito</Link>

				{/* onClick={handleAgregar} */}
			</div>
		</div>
	);
};


export default ItemCount;