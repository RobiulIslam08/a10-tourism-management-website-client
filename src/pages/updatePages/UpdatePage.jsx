import Swal from "sweetalert2";


import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
const UpdatePage = () => {
    const lodedUser = useLoaderData()
    const [country, setCountry] = useState("Bangladesh");
    // const {user} = useContext(AuthContext);
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
      };
    
    const handleUpdateTourism = (e) =>{
        e.preventDefault()
        const form = e.target
        const image = form.image.value;
        const spotName = form.spotName.value;
        const visitor = form.visitor.value;
        const travelTime = form.travelTime.value;
        const seasonality = form.seasonality.value;
        const averageCost = form.averageCost.value;
        const description = form.description.value;
        const location = form.location.value;
        const name = form.name.value;
        
      
  
        const updatedTouristField = {name,country,image,spotName,visitor, travelTime,seasonality,averageCost,description,location}
        console.log(updatedTouristField)
  
        fetch(`http://localhost:5000/mylist/${lodedUser._id}`,{
          method: 'PUT',
          headers: {
            'content-type' : "application/json"
          },
          body: JSON.stringify(updatedTouristField)
        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
          if(data.modifiedCount>0){
            Swal.fire({
              title: 'Update successful!',
              text: 'your added data successful',
              icon: 'success',
              confirmButtonText: 'ok'
            })
          }
        })
      }
    return (
        <div>
            <h1 className="lg:text-3xl text-center my-[120px]  md:text-2xl text-xl font-bold">Update Tourists Spots</h1>
            <div className="hero  ">
                <div className="hero-content ">
                    <div className="card shrink-0 xl:w-[1200px] lg:w-[960px] md:w-[670px] mx-auto shadow-xl bg-base-200">
                        <form onSubmit={handleUpdateTourism} className="card-body">
                           

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">image URL</span>
                                </label>
                                <input type="text" placeholder="image URL" name="image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tourist Sport Name</span>
                                </label>
                                <input type="text" name="spotName" placeholder="Tourist Sport Name" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label"><span className="label-text">Country Name</span></label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        placeholder="country name"
                                        className="input input-bordered w-full"
                                        value={country} // Bind the input field value to the state
                                        readOnly // Make the input field read-only to prevent manual editing
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                        <label htmlFor="currency" className="sr-only">Currency</label>
                                        <select
                                            id="currency"
                                            name="currency"
                                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm form-select"
                                            value={country} // Bind the dropdown value to the state
                                            onChange={handleCountryChange} // Call the handleCountryChange function on selection change
                                        >
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="India">Cambodia</option>
                                            <option value="India">Vietnam</option>
                                            <option value="India">Malaysia </option>
                                            <option value="India">Indonesia </option>
                                        </select>
                                    </div>
                                </div>
                            </div>





                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name="location" placeholder="location" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" name="description" placeholder="short description" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Average Cost </span>
                                </label>
                                <input type="text" name="averageCost" placeholder="average cost" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seasonality  </span>
                                </label>
                                <input type="text" name="seasonality" placeholder=" summer or winter" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Travel Time </span>
                                </label>
                                <input type="text" name="travelTime" placeholder="7 or 15" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total visitor PerYear </span>
                                </label>
                                <input type="text" name="visitor" placeholder="total visitor peryear" className="input input-bordered" required />
                            </div>

                            <button type="submit" className="btn btn-accent mt-16 mb-5">Added information</button>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;