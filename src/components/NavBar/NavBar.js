import './NavBar.scss'
import { CartWidget } from "./CartWidget/CartWidget";

export const NavBar = () => {

    return (
        <header className="header">
            {/* Nombre de la compañia */}
            <a href="#">
                <h1 className="header__compName logoFont">OXYNUS</h1>
            </a>

            {/* Menu de navegacion */}
            <nav>
                <ul className="header__menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">
                        <CartWidget/>
                    </a></li>
                </ul>
            </nav>

        </header>
    )
}