import { Link } from "react-router-dom";
import navCss from "./Nav.module.css"

function Nav(){
    return(
        <nav className={navCss.all}>
            <ul className={navCss.ul}>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/productos'>pruductos</Link></li>
                <li><Link>Cupones</Link></li>
                <li><Link>Envios</Link></li>
            </ul>


        </nav>
    )
}

export default Nav;
