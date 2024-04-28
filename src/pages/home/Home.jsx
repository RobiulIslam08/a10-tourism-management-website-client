

import Blog from "../../components/blog/Blog";
import Slider from "../../components/slider/Slider";
import Team from "../../components/team/Team";
import TouristsSpots from "../../components/touristSpots/TouristsSpots";


const Home = () => {
  
    return (
        <div>
            
          
            <Slider></Slider>
            <TouristsSpots></TouristsSpots>
            <Team></Team>
            <Blog></Blog>
          
        </div>
    );
};

export default Home;