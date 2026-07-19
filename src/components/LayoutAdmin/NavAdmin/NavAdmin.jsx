import { Link } from "react-router-dom";
import style from "../../Layout/Nav/Nav.module.css"

function NavAdmin(){
    return(
        <nav className={style.nav_container}>
            <ul className={style.nav_ul}>
                <li><Link to='/admin'>Inicio</Link></li>
                <li><Link to='/admin/nuevoproducto'>Crear nuevo Producto</Link></li>
                <li><Link to='/admin/productos'>Todos los productos</Link></li>
                <li><Link to='/admin/cupones'>Cupones</Link></li>
                <li><Link to='/'>Ir al sitio</Link></li>
                
            </ul>


        </nav>
    )
}

export default NavAdmin;
