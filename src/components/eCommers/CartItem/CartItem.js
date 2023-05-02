import './CartItem.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { CgRemove, CgAdd } from "react-icons/cg";

export const CartItem = ({id, image, title, description, category, price, quantityOnCart, stock, cantidad, totalProduct, updateQuantity, deleteProduct }) => 
{

	const cantidadInicial = 1

	const [cantidadMod, setCantidadMod] = useState(cantidad);

	const incrementar = () => {
		cantidadInicial < stock && setCantidadMod(cantidadMod + 1);
	};

	const decrementar = () => {
		cantidad > 1 && setCantidadMod(cantidadMod - 1);
	};

	useEffect(() => {
		updateQuantity(id, cantidadMod)
	}, [cantidadMod])



	return (
	
	<div key={id} className="shopcart__product">

		<img className="shopcart__product__image" src={image} alt={title}></img>

		<div className="shopcart__product__title">
			<small>Título</small>
			<h3>{title}</h3>
		</div>

		<div className="shopcart__product__stock">
			<small>Stock</small>
			<p>{stock}</p>
		</div>

		<div className="shopcart__product__quantity">
			<small>Cantidad</small>

			<div className="detBuy__quantity">
				<button className="detBuy__quantity__sig" onClick={decrementar} disabled={cantidadMod === 1}>
					<CgRemove size={15} />
				</button>
				<span className="detBuy__quantity__num"> {cantidadMod} </span>
				<button className="detBuy__quantity__sig" onClick={incrementar} disabled={cantidadMod === stock}>
					<CgAdd size={15} />
				</button>
			</div> 
		</div>

		<div className="shopcart__product__price">
			<small>Precio</small>
			<p>${price}</p>
		</div>

		<div className="shopcart__product__subtotal">
			<small>Subtotal</small>
			<p>${price * cantidad}</p>
		</div>

		<button className="shopcart__product__delete">
			<Link onClick={() => deleteProduct(id)}>
				<BsTrash
					size={20}
					className="text-orange-400 hover:text-red-700"
				/>
			</Link>
		</button>

	</div>
	)
};


/* <div className="detBuy__quantity">

<label className="detBuy__quantity__label">Cantidad: </label>
<button className="detBuy__quantity_sig" onClick={decrementar}>
  <CgRemove size={25} />
</button>
<span className="detBuy__quantity__num"> {cantidad} </span>
<button className="detBuy__quantity_sig" onClick={incrementar}>
  <CgAdd size={25} />
</button>
</div> */


/* 	return (
		<div key={id} className='mx-4 my-0 p-2 rounded-md carritoContainer'>
			<div className='max-w-5xl bg-white rounded-md mx-auto shadow shadow-verde'>
				<div className='flex p-2 justify-center'>
					<div className='w-full sm:w-1/3 md:w-1/3 p-1 flex items-center'>
						<img
							src={image}
							alt='Libro'
							className='w-full md:h-auto h-30 object-cover rounded-md'
						/>
					</div>
					<div className='w-full flex flex-col justify-center items-center text-center p-5'>
						<h2 className='text-lg font-semibold'><strong>{title}</strong></h2>
						<p className='my-2'>Stock en tienda: {stock}</p>
						<p className='my-2'>Valor Unitario: {price}</p>
						<div className="flex items-center">
							<label className="mr-4">Cantidad:</label>
							<button
								className={`px-2 py-1 rounded-l-lg ${cantidadMod === 1 ? "bg-red-600" : "bg-gray-200"} text-gray-700 focus:outline-none focus:bg-gray-300`}
								onClick={decrementar}
								disabled={cantidadMod === 1}
							>
								-
							</button>

							<span className="px-4 py-1 bg-gray-200 text-gray-700">{cantidadMod}</span>

							<button
								className={`px-2 py-1 rounded-r-lg ${cantidadMod === stock ? "bg-red-600" : "bg-gray-200"} text-gray-700  focus:outline-none focus:bg-gray-300`}

								onClick={incrementar}
								disabled={cantidadMod === stock}
							>
								+
							</button>

						</div>
						<p className='my-2'>
							Total de libro seleccionado: {formatoPrecio(totalProducto(price, cantidad))}
						</p>

					</div>
					<div className='flex justify-center items-center p-5'>
						<Link onClick={() => eliminarLibro(id)}>
							<BsTrash
								size={28}
								className="text-orange-400 hover:text-red-700"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>								
	)
};
 */

