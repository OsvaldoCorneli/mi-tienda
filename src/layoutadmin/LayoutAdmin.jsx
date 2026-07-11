import { Link, Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin.jsx";

function LayoutAdmin(){
    

    return(

    <>

        <HeaderAdmin />
            <main>
                <Outlet/>
            </main>


        
    
    
    </>        


    )
}

export default LayoutAdmin;