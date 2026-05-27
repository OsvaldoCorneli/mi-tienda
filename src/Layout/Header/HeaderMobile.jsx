import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../../public/imagen/logo.png"
import miTienda from "../../../public/imagen/Mitienda.png"
import HeaderCss from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "../SearchBar/SearchBar";

function HeaderMobile() {



    return (

        <>
            <header className={HeaderCss.backgorundMobile}>

                <div className={HeaderCss.container} >
                    <FontAwesomeIcon className={HeaderCss.menu} icon={faBars} />
                    <div className={HeaderCss.container1}>
                        <img className={HeaderCss.logoMiTienda} src={miTienda} alt="Logo tienda, carro de compras con corazon" />
                        <img className={HeaderCss.logoMobile} src={logo} alt="logo MiTienda, escrito Mitienda" />
                    </div>

                    <div className={HeaderCss.container3}>
                        <Link className={HeaderCss.cart}><FontAwesomeIcon icon={faCartShopping} /></Link>
                    </div>
                </div>
            </header>
            <SearchBar />

        </>


    )


}

export default HeaderMobile;