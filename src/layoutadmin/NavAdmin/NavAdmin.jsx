import { Link } from "react-router-dom";
import style from "../../layout/Nav/nav.module.css"

function NavAdmin(){
    return(
        <nav className={style.nav_container}>
            <ul className={style.nav_ul}>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/admin/nuevoproducto'>Crear nuevo Producto</Link></li>
                <li><Link to='/admin/productos'>Todos los productos</Link></li>
            </ul>


        </nav>
    )
}

export default NavAdmin;
