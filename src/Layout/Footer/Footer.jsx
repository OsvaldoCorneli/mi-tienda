import imageFooter from "../../../public/imagen/tiendamaslogo.png"
import TeamListContainer from "../../components/TeamListContainer/TeamListContainer";
import footerCss from "./Footer.module.css"

function Footer() {
    return (

        <footer className={footerCss.container}>

            <div className={footerCss.container1}>

                <div className={footerCss.container2}>
                    <TeamListContainer />
                    <img className={footerCss.Logoimg} src={imageFooter} alt="" />
                </div>

                <div className={footerCss.container3}>

                    <p>© 2026 Proyecto académico desarrollado con React.js para el curso de React de Talento Tech.</p>
                    <p>Las imágenes, marcas y elementos visuales utilizados pertenecen a sus respectivos autores y
                        fueron utilizados únicamente con fines educativos y sin intención comercial.</p>
                </div>
            </div>


        </footer >

    )
}

export default Footer;

