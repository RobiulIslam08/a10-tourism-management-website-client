

import { Helmet } from "react-helmet-async";
import Blog from "../../components/blog/Blog";
import Slider from "../../components/slider/Slider";
import Team from "../../components/team/Team";
import TouristsSpots from "../../components/touristSpots/TouristsSpots";


const Home = () => {
    
    return (
        <div>
            
            <Helmet>
        <title>Home</title>
    </Helmet>
  
            <Slider></Slider>
            <TouristsSpots></TouristsSpots>
            <Team></Team>
            <Blog></Blog>
          
        </div>
    );
};

export default Home;