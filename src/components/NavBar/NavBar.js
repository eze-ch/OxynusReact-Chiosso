import './NavBar.scss'
import { CartWidget } from "./CartWidget/CartWidget";
import { Link, useLocation, NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (
        <header className="header">
            {/* Nombre de la compañia */}
            <Link to={'/'}>
                <h1 className="header__compName logoFont">OXYNUS</h1>
            </Link>

            {/* Menu de navegacion */}
            <nav>
                <ul className="header__menu">
                    <li><Link className='navLink' to={'/'}>Inicio</Link></li>
                    <li><Link className='navLink' to={'/nosotros'}>Nosotros</Link></li>
                    <li><Link className='navLink' to={'/proyectos'}>Proyectos</Link></li>
                    <li><Link className='navLink' to={'/productos'}>Productos</Link></li>
                    <li><Link className='navLink' to={'/contacto'}>Contacto</Link></li>
                    <li><Link className='navLink' to={'/carrito'}>
                        <CartWidget/>
                    </Link></li>
                </ul>
            </nav>

        </header>
    )
}

