import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Home = () => {
    const {name}  = useContext(AuthContext)
    return (
        <div>
            <p>my name is {name}</p>
            home here
        </div>
    );
};

export default Home;