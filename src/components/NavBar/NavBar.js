import './NavBar.scss'

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
                        <i className="bi bi-cart-fill"></i> <span id="shopNum" className="shopNum">0</span>
                    </a></li>
                </ul>
            </nav>

        </header>
    )
}