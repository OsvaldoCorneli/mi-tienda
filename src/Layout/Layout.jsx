import { Outlet } from 'react-router-dom';
import Header from '../layout/Header/Header.jsx'
import Footer from './Footer/Footer.jsx';
import SkeletonItem from '../components/SkeletonItem/SkeletonItem.jsx';
import SkeletonContainer from '../components/SkeletonContainer/SkeletonContainer.jsx';


function Layout() {

    return (

        <>
            <Header />
            <main>
                <Outlet/>
            </main>
           <Footer/>
        </>


    )

}

export default Layout;