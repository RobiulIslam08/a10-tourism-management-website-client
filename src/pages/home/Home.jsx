import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Slider from "../../components/slider/Slider";


const Home = () => {
    const {name}  = useContext(AuthContext)
    return (
        <div>
          
            <Slider></Slider>
            home here
        </div>
    );
};

export default Home;