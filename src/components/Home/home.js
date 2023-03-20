import './home.scss'


export const Home = () => {

    return (
        /* <!--Logo central y eslogan--> */
        <section className="ind-central">
            <div className="ind-central__logo" id="indLogoCircle">
                <div></div> {/* <!-- borde y background circular del logo --> */}
                <img src="./assets/iconos/logo Oxynus gris.svg" id="indLogoImg" alt="Logo de la compañia"></img>
                <h3 className="esloganFont">RESOLVIENDO CON INGENIO</h3>
            </div>
    
            {/* <!-- Modal con bienvenida --> */}
            <div className="ind-central__modal" id="ind-modal">
                <h2>Bienvenido!</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta neque in perspiciatis sint quia eius corrupti. Ut asperiores fugit, voluptas nesciunt facilis quo in earum ex perferendis illum labore eveniet?</p>
                <button className="gral-button" id="buttonClose-indModal">Cerrar</button>
            </div>
    
        </section>


    )
}