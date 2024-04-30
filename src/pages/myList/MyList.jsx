import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";




const MyList = () => {
    const {user} = useContext(AuthContext)
    const [myitems, setMYItems] = useState([])
    const [control, setControl] =useState(false)
    useEffect(()=>{
        // https://a10-tourism-management-website-server.vercel.app
        fetch(`https://a10-tourism-management-website-server.vercel.app/mylist/${user.email}`)
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
       
                fetch(`https://a10-tourism-management-website-server.vercel.app/mylist/${_id}`,{
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
                  <Helmet>
        <title>My List</title>
    </Helmet>
            <h1 className="lg:text-3xl text-center my-[120px] md:text-2xl text-xl font-bold">My List  </h1>
        
     
         <div  className="overflow-x-auto w-full ">
         <table className="table">
           {/* head */}
           <thead>
             <tr>
               {/* <th>
                 <label>
                   <input type="checkbox" className="checkbox" />
                 </label>
               </th> */}
               <th>Spot and country name</th>
               <th>travel time and average cost</th>
               <th>update or delete</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             {/* row 1 */}
          
        {
          myitems.map(myitem =>    <tr key={myitem._id}>
            {/* <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th> */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={myitem.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{myitem.country}</div>
                  <div className="text-sm opacity-50">{myitem.spotName}</div>
                </div>
              </div>
            </td>
            <td>
              Travel Time {myitem.travelTime} Days
              <br/>
              <span className="badge badge-ghost badge-sm">Average Cost {myitem.averageCost}$</span>
            </td>
            <td>            <div className="flex my-4 gap-2">
               <Link to={`/update/${myitem._id}`}  className="btn btn-sm btn-accent">Update</Link>
                <button onClick={()=>handleDelete(myitem._id)} className="btn btn-sm btn-warning">Delete</button>
               </div></td>
            <th>
            <Link to={`/details/${myitem._id}`}  className="btn btn-sm w-full btn-accent">view details</Link>
            </th>
          </tr>)
        }
            
           
           </tbody>
     
           
         </table>
       </div>
          
            </div>




         
      
    );
};

export default MyList;






// <div key={myitem._id} className="my-10 overflow-x-auto">
//             <table  data-aos="fade-right" className=" border border-slate-500 w-full text-gray-600">
    
//               <tbody>
//               <tr >
//                   <td className="border border-slate-700 font-semibold">Country Name</td>
//                   <td className="border border-slate-700 ">{myitem.country}</td>
//                 </tr>
//                 <tr >
//                   <td className="border border-slate-700 font-semibold">Location</td>
//                   <td className="border border-slate-700 ">{myitem.location}</td>
//                 </tr>
//                 <tr >
//                   <td className="border border-slate-700 font-semibold">Average Cost</td>
//                   <td className="border border-slate-700 ">${myitem.averageCost}</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-slate-700 font-semibold">Seasionality</td>
//                   <td className="border border-slate-700 ">{myitem.seasonality}</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-slate-700 font-semibold">Travel Time</td>
//                   <td className="border border-slate-700 ">{myitem.travelTime} days</td>
//                 </tr>
//                 <tr >
//                   <td className="border border-slate-700 font-semibold">Visitor</td>
//                   <td className="border border-slate-700 ">{myitem.visitor} people</td>
//                 </tr>
                
//               </tbody>
//             </table>
//             <div className="flex my-4 justify-between">
//                <Link to={`/update/${myitem._id}`}  className="btn btn-sm btn-accent">Update</Link>
//                 <button onClick={()=>handleDelete(myitem._id)} className="btn btn-sm btn-warning">Delete</button>
//                </div>
//                <Link to={`/details/${myitem._id}`}  className="btn btn-sm w-full btn-accent">view details</Link>

//           </div>

