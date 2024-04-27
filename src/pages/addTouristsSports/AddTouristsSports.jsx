import { useState } from "react";
import Swal from "sweetalert2";

const AddTouristsSports = () => {
    const [country, setCountry] = useState("Bangladesh");
    console.log(country)
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };

    const handleAddedTourism = (e) =>{
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
    

      const touristField = {country,image,spotName,visitor, travelTime,seasonality,averageCost,description,location}
      console.log(touristField)

      fetch('http://localhost:5000/addTouristsSports',{
        method: 'POST',
        headers: {
          'content-type' : "application/json"
        },
        body: JSON.stringify(touristField)
      })
      .then(res => res.json())
      .then(data => {
       console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'added successful!',
            text: 'your added data successful',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        }
      })
    }
    return (
        <div>
            <h1 className="lg:text-3xl text-center my-[120px]  md:text-2xl text-xl font-bold">Add Tourists Spots</h1>
            <div className="hero  ">
  <div className="hero-content ">
  
    <div className="card shrink-0 xl:w-[1200px] lg:w-[960px] md:w-[670px] mx-auto shadow-xl bg-base-200">
      <form onSubmit={handleAddedTourism} className="card-body">
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
      


{/* 

        <div className="form-control">
                <label  className="label"><span className="label-text">Country Name</span></label>
                <div className="relative mt-2 rounded-md shadow-sm">
                   
                    <input  type="text" placeholder="country name" className="input input-bordered w-full" required />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">Currency</label>
                        <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm form-select">
                            <option value="USD">Bangladesh</option>
                            <option value="CAD">Thailand</option>
                            <option value="EUR">India</option>
                        </select>
                    </div>
                </div>
            </div> */}
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
        <button  type="submit" className="btn btn-accent mt-16 mb-5">Added information</button>

       
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddTouristsSports;













// <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
// <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
//     <fieldset className="gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

//         <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          
//             <div className="col-span-full sm:col-span-3">
//                 <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">image</label>
//                 <input id="firstname" type="text" placeholder="image url" className="w-full  py-1.5 pl-7 pr-20 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
//             </div>
//             <div className="col-span-full sm:col-span-3">
//                 <label htmlFor="lastname" className="text-sm"> Tourists Spot Name </label>
                                                                                   
//                 <input id="lastname" type="text" placeholder="tourists spot name" className="w-full py-1.5 pl-7 pr-20 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
//             </div>
//             <div className="col-span-full sm:col-span-3">
//                 <label htmlFor="email" className="text-sm">Email</label>
//                 <input id="email" type="email" placeholder="Email" className="w-full py-1.5 pl-7 pr-20 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
//             </div>




            // <div className="col-span-full sm:col-span-3">
            //     <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Country Name</label>
            //     <div className="relative mt-2 rounded-md shadow-sm">
                   
            //         <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="country name" />
            //         <div className="absolute inset-y-0 right-0 flex items-center">
            //             <label htmlFor="currency" className="sr-only">Currency</label>
            //             <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
            //                 <option key="USD">Bangladesh</option>
            //                 <option key="CAD">Thailand</option>
            //                 <option key="EUR">India</option>
            //             </select>
            //         </div>
            //     </div>
            // </div>







//             <div className="col-span-full">
//                 <label htmlFor="address" className="text-sm">Address</label>
//                 <input id="address" type="text" placeholder="" className="w-full py-1.5 pl-7 pr-20 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
//             </div>
//             <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="city" className="text-sm">City</label>
//                 <input id="city" type="text" placeholder="" className="w-full py-1.5 pl-7 pr-20 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
//             </div>
//             <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="state" className="text-sm">State / Province</label>
//                 <input id="state" type="text" placeholder="" className="w-full py-1.5 pl-7 pr-20 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
//             </div>
//             <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
//                 <input id="zip" type="text" placeholder="" className="w-full py-1.5 pl-7 pr-20 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
//             </div>
//         </div>
//     </fieldset>

// </form>
// </section>