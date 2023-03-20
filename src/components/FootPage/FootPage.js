import './FootPage.scss'

import logoOxynus from './logoOxynusGris.svg'
import iconIG from './iconoIGAlterado.png'
import iconFace from './iconoFaceAlterado.png'


export const FootPage = () => {

    return (
        <footer className="footer">
            {/* Logo y nombre de compañia */}
            <div className="footer__info">
                <div className="footer__info__logo">
                    <a href="../index.html">
                        <img src={logoOxynus} alt="logo Oxynus" />
                    </a>
                </div>
                <div className="footer__info__name">
                    <h2 className="logoFont">OXYNUS</h2>
                    <h3 className="esloganFont">RESOLVIENDO CON INGENIO</h3>
                </div>
            </div>

            {/* Redes Sociales */}
            <div className="footer__social">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={iconIG} alt="icono instagram" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={iconFace} alt="icono facebook" />
                </a>
            </div>
        </footer>
    )
}