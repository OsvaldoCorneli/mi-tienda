import { Link } from "react-router-dom";
import style from "./Nav.module.css"

function Nav(){
    return(
        <nav className={style.nav_container}>
            <ul className={style.nav_ul}>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/productos'>productos</Link></li>
                <li><Link>Cupones</Link></li>
                <li><Link>Envios</Link></li>
            </ul>


        </nav>
    )
}

export default Nav;
