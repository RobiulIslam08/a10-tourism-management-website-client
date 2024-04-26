
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const {user,logout} = useContext(AuthContext)
    const links = <>
        <div className="space-x-9">
            <NavLink className={({ isActive }) =>
                isActive ? "font-bold text-primary" : "font-semibold"
            } to="/">Home</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? "font-bold text-primary" : "font-semibold"
            } to="/allTouristsSports">All Tourists Sports</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? "font-bold text-primary" : "font-semibold"
            } to="/addTouristsSports">Add Tourists Sports</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? "font-bold text-primary" : "font-semibold"
            } to="/mylist">My List</NavLink>
        </div>
    </>

    const handleLogout = () =>{
        logout()
        .then( ()=>{ 
            alert('log out')
          })
          .catch(error =>{
            console.log('error khaiso logout ' ,error)
          })
    }
    return (
        <div className='lg:px-24 px-10 py-3'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <p className="lg:text-3xl text-lg font-bold">Journey Junction</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ?   <div  className=" dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"> <div className="w-10 rounded-full">
                      <img alt="profile" src={user.photoURL? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                    </div></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu bg-base-100 rounded-box w-24">
                      {/* <li><a></a></li> */}
                      {user?.displayName? user.displayName : 'no name '}
                      <button className='btn btn-sm' onClick={handleLogout}>log out</button>
                      
                    </ul>
                  </div> :  
                    <><button  className="mr-2 lg:mr-5 btn btn-sm  btn-accent"><Link to="/login">login</Link></button>
                    <button  className="btn btn-sm  btn-accent"><Link to="/register">Regsiter</Link></button></>
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;