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

import { Formik } from 'formik'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'Mínimo 4 caracteres')
                .max(30, 'Máximo 30 caracteres'),
    direccion: Yup.string()
                .required('Este campo es obligatorio')
                .min(6, 'Mínimo 6 caracteres')
                .max(30, 'Máximo 30 caracteres'),
    email: Yup.string()
                .email('El email es inválido')
                .required('Este campo es obligatorio')
})

const Checkout = () => {
    const { cart, totalShop, emptyCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)


    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, price: prod.price, cantidad: prod.cantidad, name: prod.title})),
            total: totalShop(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productsRef = collection(db, 'products')

        const outOfStock = []

        const itemsRef = query(productsRef, where( documentId(), 'in', cart.map(prod => prod.id) ))
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
        } else {
            alert("Hay items sin stock")
        }
    }


    if (orderId) {
        return (
            <div className="checkoutEnd">
                <h2>PEDIDO REGISTRADO</h2>
                <p>Segui tu orden con el siguiente codigo: {orderId}</p>
                <Link className="volverInicio" to="/">Volver al inicio</Link>
            </div>
        )
    }
    
    if (cart.length === 0) {
        return <Navigate to="/"/>
    } 

    return (
        <div className="contCentral__form">
            <h2>Checkout</h2>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                validationSchema={schema}
                onSubmit={generarOrden}
            >
                {( {values, errors, handleChange, handleSubmit, isSubmitting} ) => (
                    <form className="contCentral__form" onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            value={values.nombre}
                            type={'text'}
                            placeholder='Tu nombre'
                            className="contCentral__form__data"
                            name="nombre"
                        />
                        {errors.nombre && <p className="error">{errors.nombre}</p>}

                        <input 
                            onChange={handleChange}
                            value={values.direccion}
                            type={'text'}
                            placeholder='Direccion'
                            className="contCentral__form__data"
                            name="direccion"
                        />
                        {errors.direccion && <p className="error">{errors.direccion}</p>}

                        <input 
                            onChange={handleChange}
                            value={values.email}
                            type={'email'}
                            placeholder='Tu Email'
                            className="contCentral__form__data"
                            name="email"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}


                        <button className="contCentral__form__send" type="submit" disabled={isSubmitting}>Enviar</button>
                    </form>
                )}
            </Formik>

            
        </div>
    )
}

export default Checkout
