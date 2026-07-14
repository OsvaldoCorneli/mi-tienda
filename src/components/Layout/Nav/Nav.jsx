import { Link } from "react-router-dom";
import style from "./Nav.module.css"
import { useAuth } from '../../../context/AuthContext.jsx'

function Nav() {

    const { user, logout } = useAuth()

    return (
        <nav className={style.nav_container}>
            <ul className={style.nav_ul}>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/productos'>productos</Link></li>
                <li><Link>Cupones</Link></li>
                <li><Link>Envios</Link></li>

                {user ? (
                    <>{/* Mostrar Gestion SOLO si el usuario es admin */}
                        {user.admin && (
                            <li><Link to="/admin" >Dashboard</Link></li>)}
                        <button onClick={logout}>Cerrar Sesión</button>
                    </>
                ) : null}

            </ul>


        </nav>
    )
}

export default Nav;
