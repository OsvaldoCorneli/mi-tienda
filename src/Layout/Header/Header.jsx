import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import style from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    return (

        <>
            <header>
                <section>
                    <a className={style.mobile_iconMenu}><FontAwesomeIcon icon={faBars} /></a>
                    <img src="/imagen/logomitienda.jpeg" alt="logo de mi tienda" />
                    <SearchBar prop={false} />
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    <a className={style.other_icon}><FontAwesomeIcon  icon={faUser} /></a>
                    <a className={style.other_icon} ><FontAwesomeIcon icon={faBell} /></a>
                    <a className={style.mobile_icon} ><FontAwesomeIcon icon={faCartShopping} /></a>
                </section>
                <SearchBar prop={true}/>
               <Nav/>
            </header>

        </>

    )

}


export default Header; 
