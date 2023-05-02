import React, { useContext, useState } from 'react';
import { Button, Label, Select, TextInput } from 'flowbite-react'
import { CartContext } from '../../../Context/CartContext';
//import { formatoPrecio } from '../../helpers/formatoPrecio';
import { Tarjetas } from '../../Tools/Tarjetas/Tarjetas'
import { Link, Navigate } from 'react-router-dom';
import { db } from "../../../firebase/config";
import { collection, addDoc, query, where, writeBatch, documentId, getDocs } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import "./Checkout.scss"
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {

	const notify = () => 
		toast.error('Hubo un error. Hay algun producto que no tiene stock disponible!', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});

	const { cart, subTotal, totalShop, iva, envio, emptyCart } = useContext(CartContext)

	const [formErrors, setFormErrors] = useState({});

	const [orderId, setOrderId] = useState(null)

	const [values, SetValues] = useState({
		nombre: "",
		direccion: "",
		celular: "",
		email: "",
		metodoPago: "",
		numeroTarjeta: ""

	})

	const handleInputChange = (e) => {
		SetValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	const validarForm = () => {
		let errors = {};
		if (!values.nombre.trim()) {
			errors.nombre = "El nombre es requerido";
		}
		if (!values.direccion.trim()) {
			errors.direccion = "La dirección es requerida";
		}
		if (!values.celular.trim()) {
			errors.celular = "El número de celular es requerido";
		} else if (!/^\d+$/.test(values.celular)) {
			errors.celular = "El número de celular debe contener solo números";
		}
		if (!values.email.trim()) {
			errors.email = "El correo electrónico es requerido";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
			errors.email = "El correo electrónico no es válido";
		}
		if (!values.metodoPago.trim()) {
			errors.metodoPago = "El método de pago es requerido";
		}
		if (!values.numeroTarjeta.trim()) {
			errors.numeroTarjeta = "El número de tarjeta es requerido";
		} else if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(values.numeroTarjeta)) {
			errors.numeroTarjeta = "El número de tarjeta debe tener el formato xxxx-xxxx-xxxx-xxxx";
		}
		return errors;
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		/* console.log("Submit", values) */

		const errors = validarForm();
		setFormErrors(errors);
		if (Object.keys(errors).length === 0) {

			const orden = {
				cliente: values,
				items: cart.map((prod) => ({ id: prod.id, precio: prod.price, cantidad: prod.cantidad, titulo: prod.title })),
				total: totalShop(),
				fecha: new Date()
			}

			/* console.log(orden) */

			const batch = writeBatch(db)
			const ordersRef = collection(db, "orders")
			const productsRef = collection(db, "products")

			const outOfStock = []

			const itemsRef = query(productsRef, where(documentId(), 'in', cart.map(prod=> prod.id)))

			const response = await getDocs(itemsRef)

			response.docs.forEach((doc) => {
				const item = cart.find(prod => prod.id === doc.id)

				if (doc.data().stock >= item.cantidad) {
					batch.update(doc.ref, {
						stock: doc.data().stock - item.cantidad
					})
				} else {
					outOfStock.push(item)
				}
			})

			if (outOfStock.length === 0) {
				await batch.commit()

				addDoc(ordersRef, orden)
					.then((doc) => {
						setOrderId(doc.id)
						emptyCart()
					})
			}else {
				/* alert("Hay Items sin stock") */
				notify()
			}
			


			
		}


	}

	if (orderId) {
		return (
			<div className='main'>
				<div className='main__checkout flex mx-auto gap-3'>
					<h2 className='text-4xl'>Tu orden se registro con éxito</h2>
					<p className='text-lg'>Usa tu numero de orden para seguimiento de tu pedido: <strong>{orderId}</strong></p>
					<Link className="bg-green-500 rounded-md p-1 hover:text-white" to="/" >Volver al inicio</Link>
				</div>
			</div>
		)
	}

	if (cart.length === 0) {
		return <Navigate to="/" />
	}

	

	return (
		<main className='main'>

			<div className='main__formulario'>

				<h1 className='main__title'>TERMINA TU COMPRA</h1>

				<div className='flex flex-row justify-center mt-5 p-1 gap-2 max-lg:flex-col max-lg:text-sm'>
					<div className="detalleCompra w-3/5 flex justify-center p-5 shadow-lg bg-green-100 rounded-lg max-lg:w-full">
						<table className="table-auto w-full rounded-lg border border-double">
							<caption className="text-lg font-bold text-white bg-green-500 rounded-t-lg py-2 px-4">DETALLE DE LA COMPRA</caption>
							<thead>
								<tr className="bg-green-500 text-white">
									<th className="px-4 py-2">Libro</th>
									<th className="px-4 py-2">Precio Unitario</th>
									<th className="px-4 py-2">Cantidad</th>
									<th className="px-4 py-2">Precio</th>
								</tr>
							</thead>
							<tbody>
								{
									cart.map((prod) => (
										<tr key={prod.id} className='text-center'>
											<td className=" px-4 py-2"><strong>{prod.title}</strong></td>
											<td className=" px-4 py-2">${prod.price}</td>
											<td className=" px-4 py-2">{prod.cantidad}</td>
											<td className=" px-4 py-2">${prod.cantidad * prod.price}</td>
										</tr>
									)
									)}

							</tbody>
							<tfoot >
								<tr>
									<td colSpan="4" className=" px-4 py-2  text-right">Subtotal: <strong>${subTotal()}</strong></td>
								</tr>
								<tr>
									<td colSpan="4" className=" px-4 py-2 text-right">IVA (19%): <strong>${iva()}</strong></td>
								</tr>
								<tr>
									<td colSpan="4" className=" px-4 py-2 text-right">Envío: <strong>${envio()}</strong></td>
								</tr>
								<tr>
									<td colSpan="4" className=" px-4 py-2  text-right">Total: <strong>${totalShop()}</strong></td>
								</tr>

							</tfoot>
						</table>

					</div>
					<div className='datosCliente w-96 p-5 shadow-lg bg-green-100 rounded-lg max-lg:w-full'>
						<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="nombre"
										value={formErrors.nombre ? <div className="text-red-600 text-sm">{formErrors.nombre}</div> : "Nombre"}
									/>
								</div>
								<TextInput
									id="nombre"
									value={values.nombre}
									onChange={handleInputChange}
									name="nombre"
									type="text"
									sizing="md"
									placeholder="John Doe"
								/* required={true} */
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="direccion"
										value={formErrors.direccion ? <div className="text-red-600 text-sm">{formErrors.direccion}</div> : "Dirección"}
									/>
								</div>
								<TextInput
									id="direccion"
									value={values.direccion}
									onChange={handleInputChange}
									name="direccion"
									type="text"
									sizing="md"
									placeholder="Cra 152 # 25- 30"
								/* required={true} */
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="celular"
										value={formErrors.celular ? <div className="text-red-600 text-sm">{formErrors.celular}</div> : "Celular"}
									/>
								</div>
								<TextInput
									id="celular"
									value={values.celular}
									onChange={handleInputChange}
									name="celular"
									type="text"
									sizing="md"
									placeholder="315658427"
								/* required={true} */
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="email"
										value={formErrors.email ? <div className="text-red-600 text-sm">{formErrors.email}</div> : "Email"}
									/>
								</div>
								<TextInput
									id="email"
									value={values.email}
									onChange={handleInputChange}
									name="email"
									type="email"
									sizing="md"
									placeholder="admin@admin.com"
								/* required={true} */
								/>
							</div>
							<div id="select">
								<div className="mb-2 block">
									<Label
										htmlFor="medPago"
										value="Metodo de pago"
									/>
								</div>
								<Select
									id="medPago"
									value={values.metodoPago}
									onChange={handleInputChange}
									name="metodoPago"
									sizing="md"
								/* required={true} */
								>
									{Tarjetas.map((metodo) => (
										<option key={metodo.id} value={metodo.nombre}>
											{metodo.nombre}
										</option>
									))}
								</Select>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="numeroTarjeta"
										value={formErrors.numeroTarjeta ? <div className="text-red-600 text-sm">{formErrors.numeroTarjeta}</div> : "Numero de tarjeta"}
									/>
								</div>
								<TextInput
									id="numeroTarjeta"
									value={values.numeroTarjeta}
									onChange={handleInputChange}
									name="numeroTarjeta"
									type="text"
									sizing="md"
									placeholder="5687-5654-6354-1487"
								/* required={true} */
								/>
							</div>
							<Button className='bg-green-500' type="submit" /* disabled={Object.keys(errors).length === 0 ? false : true} */>
								PAGAR
							</Button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="light"
							/>
							<ToastContainer />
						</form>
					</div>
				</div>

			</div>
		</main>
	)



};

