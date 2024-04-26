import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="w-[90%] my-[100px] mx-auto">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;