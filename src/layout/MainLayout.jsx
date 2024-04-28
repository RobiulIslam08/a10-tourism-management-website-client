import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer position="top-center"></ToastContainer>
           <div className="w-[90%] my-[80px] mx-auto">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;