import { createContext, useState } from "react";

export const CartContext = createContext()

//cargue en localstorage - inicie en estado carrito
/* const init = JSON.parse(localStorage.getItem('carrito')) || [] */

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const productQuantity = () => {
        return cart.reduce((total, prod) => total + prod.cantidad, 0);
    }

    const subTotal = () => {
        return cart.reduce((total, prod) => total + prod.price * prod.cantidad, 0);
    }

    const totalProduct = (precioU, cantidad) => {
        return precioU * cantidad
    }

    const iva = () => {
        return subTotal() * 0.21
    }

    const envio = () => {
        return 2500
    }

    const totalShop = () => {
        return subTotal() + iva() + envio()
    }

    const emptyCart = () => {
        setCart([])
    }

    const deleteProduct = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const quantityById = (id) => {
        const product = cart.find((product) => product.id === id);
        return product ? product.cantidad : 0;
    }

    const updateQuantity = (id, cantidad) => {
        setCart(
            cart.map((prod) => {
                if (prod.id === id) {
                    return { ...prod, cantidad };
                }
                return prod;
            })
        );
    };

    //useEffect para actualizar local storage de acuerdo a eliminaciones o cargues en el carrito
    /* useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart]) */


    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart: addToCart,
            isInCart: isInCart,
            productQuantity: productQuantity,
            iva,
            subTotal,
            totalProduct: totalProduct,
            totalShop: totalShop,
            envio,
            emptyCart: emptyCart,
            deleteProduct: deleteProduct,
            quantityById: quantityById,
            updateQuantity: updateQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

/* cart,
setCart,
agregarCarrito: addToCart,
estaEnCarrito: isInCart,
cantidadLibros: productQuantity,
iva,
subTotal,
totalProducto: totalProduct,
totalCompra: totalShop,
envio,
vaciarCarrito: emptyCart,
eliminarLibro: deleteProduct,
obtenerCantidadPorId: quantityById,
actualizarCantidad: updateQuantity */