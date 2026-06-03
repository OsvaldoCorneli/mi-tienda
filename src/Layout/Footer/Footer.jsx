import imageFooter from "/imagen/tiendamaslogo.png"
import TeamListContainer from "../../components/TeamListContainer/TeamListContainer";
import style from "./Footer.module.css"

function Footer() {
    return (

        <footer>

            <section className={style.team_container}>
                <h3>Nuestro Equipo</h3>
                <TeamListContainer />
            </section>

            <section className={style.informacion_container}>
                <div>
                    <h4>Categorias</h4>
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Cupones</li>
                        <li>Envios</li>
                    </ul>
                </div>
                <div>
                    <h4>Soporte</h4>
                    <ul>
                        <li>Contacto</li>
                        <li>Politica de privacidad</li>
                        <li>Terminos y condiciones</li>
                    </ul>
                </div>
                <div>
                    <h4>Seguinos</h4>
                </div>
                <div>
                <h4 >contactanos</h4>
                <ul>
                    <li>info@mitienda.com</li>
                    <li>+52 34 5678 1239</li>
                </ul>
            </div>
            </section>
            <div className={style.info_contacto}>
                <h4 >contactanos</h4>
                <ul>
                    <li>info@mitienda.com</li>
                    <li>+52 34 5678 1239</li>
                </ul>
            </div>

            <section className={style.info_text}>
                <p>© 2026 Proyecto académico desarrollado con React.js para el curso de React de Talento Tech.
                    Las imágenes, marcas y elementos visuales utilizados pertenecen a sus
                    respectivos autores y fueron utilizados
                    únicamente con fines educativos y sin intención comercial.</p>

            </section>


        </footer>

    )
}

export default Footer;

