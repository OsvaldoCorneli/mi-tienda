import { Link, Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin.jsx";
import style from "./LayoutAdmin.module.css"

function LayoutAdmin(){
    

    return(

    <>

        <HeaderAdmin />
            <main className={style.main_admin}>
                <Outlet/>
            </main>


        
    
    
    </>        


    )
}

export default LayoutAdmin;