import { Link, Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";

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