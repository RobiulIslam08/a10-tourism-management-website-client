import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const MyList = () => {
    const {user} = useContext(AuthContext)
    const [myitems, setMYItems] = useState([])
    const [control, setControl] =useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/mylist/${user.email}`)
        .then((res)=>res.json())
        .then(data => {
            console.log(data)
            setMYItems(data)
           
        })
    },[user,control])
    const handleDelete = (_id)=>{
   
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
       
                fetch(`http://localhost:5000/mylist/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log('deleted')
                    if(data.deletedCount>0){

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          setControl(!control)
                    }
                })
            }
          });
    }
    return (
        <div>
            <h1 className="lg:text-3xl text-center my-[120px] md:text-2xl text-xl font-bold">My List  </h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
           {
            myitems.map(myitem =>  <div  key={myitem._id} data-aos-duration="1000" data-aos="zoom-out-up" className="hover:shadow-2xl card h-[450px] card-compact lg:w-[320] xl:w-96 md:w-[300px] w-[250px] mx-auto bg-base-100 shadow-xl">
            <figure><img className="w-full h-96" src="#" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{myitem.spotName}</h2>
                <div className="space-y-2 text-gray-500 font-light">
                   <div className="flex  justify-between">
                   <p>average cost :</p>
                    <span>${myitem.averageCost}</span>
                   </div>
                 
                    <div className="flex w-[100%] justify-between items-center ">
                        <p >Seasonality :</p>
                        <span className=" border border-green-400 p-2 rounded-lg">{myitem.seasonality}</span>
                    </div>
                    <div className="flex">
                        <p>Total Visitors PerYear :</p>
                        <span>{myitem.visitor}</span>
                    </div>
                    <div className="flex">
                        <p>Travel Time :</p>
                        <span>{myitem.travelTime}days</span>
                    </div>
                </div>
               <div className="flex justify-between">
               <Link to={`/update/${myitem._id}`}  className="btn btn-accent">Update</Link>
                <button onClick={()=>handleDelete(myitem._id)} className="btn btn-warning">Delete</button>
               </div>
                <Link to={`/details/${myitem._id}`}  className="btn btn-accent">view details</Link>
                {/* to={`/details/${tourismSpot._id}`}  */}
                {/* <Link to='details' className="btn btn-accent">view details</Link> */}
                {/* <button className="btn btn-accent">view details </button> */}
            </div>

        </div> )
           }
            </div>
        </div>
    );
};

export default MyList;