import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../../public/imagen/logo.png"
import miTienda from "../../../public/imagen/Mitienda.png"
import HeaderCss from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faBell } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "../SearchBar/SearchBar";

function Header() {

    return (
        <header className={HeaderCss.backgorund}>
            <div className={HeaderCss.container1}>
                <img className={HeaderCss.logoMiTienda} src={miTienda} alt="Logo tienda, carro de compras con corazon" />
                <img className={HeaderCss.logoMobile} src={logo} alt="logo MiTienda, escrito Mitienda" />
            </div>
            <div className={HeaderCss.container2}>
                <SearchBar />
                <Nav />
            </div>
            <div className={HeaderCss.container3}>
                <Link><FontAwesomeIcon icon={faUser} /></Link>
                <Link><FontAwesomeIcon icon={faBell} /></Link>
                <Link><FontAwesomeIcon icon={faCartShopping} /></Link>
            </div>



        </header>
    )


}


export default Header; 
