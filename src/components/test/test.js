import "./test.scss"
import { Link/* , useLocation, NavLink  */} from 'react-router-dom';

export const Test = () => {

    return(
        <div>

            <h2>DAWDAWDWDAWD</h2>
            <button className="testCursor"><Link to={'/productos/Electronica'}>Electronica test</Link></button>
        </div>
    );
};



/* 
return (
    <>
        {

            <div className='main bg-white rounded-lg'>

                <div data-aos="zoom-in-right">
                    {
                        cart.map((lib) => (

                            <CartItem
                                key={lib.id}
                                {...lib}
                                totalProducto={totalProducto}
                                actualizarCantidad={actualizarCantidad}
                                eliminarLibro={eliminarLibro}
                            />
                        ))
                    }
                </div>
                <div className='flex flex-col gap-5 p-5 justify-center items-center'>
                    <span className='text-green-500 text-xl'>
                        Total de la Compra: <strong> {subTotal()}</strong>
                    </span>
                    <div className='flex gap-2'>
                        <Link className='p-2 rounded-md bg-white w-40 text-center text-verde border border-gray-500 hover:bg-green-500 hover:text-white' to={"/checkout"}>
                            Finalizar compra
                        </Link>
                        <Link className='p-2 rounded-md bg-white w-40 text-center text-verde border border-gray-500 hover:bg-red-600 hover:text-white' onClick={vaciarCarrito}>
                            Vaciar Carrito
                        </Link>
                    </div>
                </div>
            </div>
        }
    </>
)
}; */