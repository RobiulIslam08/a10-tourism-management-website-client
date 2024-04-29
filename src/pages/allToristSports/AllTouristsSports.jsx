import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSports = () => {
  const allTourists = useLoaderData()
  const [sortData, setSortData] = useState([allTourists])
  console.log(sortData)
  console.log(allTourists)

  function sortByAverageCost() {

    const sortedData = allTourists.sort((a, b) => b.averageCost - a.averageCost)
    console.log('sorted')
    setSortData(sortedData)


  }
  return (
    <div>
      <div>
        <h1 className="lg:text-3xl text-center my-[100px] md:text-2xl text-xl font-bold">Tourists Spots Section </h1>
        <div  className="flex justify-center items-center mb-20">
        <details className="dropdown ">
  <summary className="m-1 bg-green-600 px-10 hover:bg-green-700 text-white btn">Sort By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li className="dark:hover:bg-[#635353]  dark:text-white rounded-xl" onClick={sortByAverageCost}><a>Average Cost</a></li>
   
  </ul>
</details>
        </div>
        {/* const updatedTouristField = {name,country,image,spotName,visitor, travelTime,seasonality,averageCost,description,location} */}
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

          {
            allTourists.map(allTourist => <div key={allTourist._id} data-aos-duration="1000" data-aos="zoom-out-up" className="hover:shadow-2xl card h-[450px] card-compact lg:w-[320] xl:w-96 md:w-[300px] w-[250px] mx-auto bg-base-100 shadow-xl">
              <figure><img className="w-full h-96" src={allTourist.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{allTourist.spotName}</h2>
                <div className="space-y-2 text-gray-500 font-light">
                  <div className="flex  justify-between">
                    <p>average cost :</p>
                    <span>{allTourist.averageCost}</span>
                  </div>

                  <div className="flex w-[100%] justify-between items-center ">
                    <p >Seasonality :</p>
                    <span className=" border border-green-400 p-2 rounded-lg">{allTourist.seasonality}</span>
                  </div>
                  <div className="flex">
                    <p>Total Visitors PerYear :</p>
                    <span>{allTourist.visitor}</span>
                  </div>
                  <div className="flex">
                    <p>Travel Time :</p>
                    <span>{allTourist.travelTime} days</span>
                  </div>
                </div>
                <Link to={`/details/${allTourist._id}`} className="btn btn-accent">view details</Link>
                {/* <Link to='details' className="btn btn-accent">view details</Link> */}
                {/* <button className="btn btn-accent">view details </button> */}
              </div>

            </div>)
          }

        </div>
      </div>
    </div>
  );
};

export default AllTouristsSports;