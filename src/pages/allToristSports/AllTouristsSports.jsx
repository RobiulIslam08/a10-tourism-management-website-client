import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSports = () => {
    const allTourists = useLoaderData()
    console.log(allTourists)
    return (
        <div>
           <div>
            <h1 className="lg:text-3xl text-center my-[120px] md:text-2xl text-xl font-bold">Tourists Spots Section </h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            
              {
                allTourists.map(allTourist =>    <div key={allTourist._id} data-aos-duration="1000" data-aos="zoom-out-up" className="hover:shadow-2xl card h-[450px] card-compact lg:w-[320] xl:w-96 md:w-[300px] w-[250px] mx-auto bg-base-100 shadow-xl">
                <figure><img className="w-full h-96" src={allTourist.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{allTourist.spotName}</h2>
                    <div className="space-y-2 text-gray-500 font-light">
                       <div className="flex  justify-between">
                       <p>average cost :</p>
                        <span>$2000</span>
                       </div>
                     
                        <div className="flex w-[100%] justify-between items-center ">
                            <p >Seasonality :</p>
                            <span className=" border border-green-400 p-2 rounded-lg">winter</span>
                        </div>
                        <div className="flex">
                            <p>Total Visitors PerYear :</p>
                            <span>5000</span>
                        </div>
                        <div className="flex">
                            <p>Travel Time :</p>
                            <span>7 days</span>
                        </div>
                    </div>
                    <Link to={`/details/${allTourist._id}`} className="btn btn-accent">view details</Link>
                    {/* <Link to='details' className="btn btn-accent">view details</Link> */}
                    {/* <button className="btn btn-accent">view details </button> */}
                </div>

            </div>  )
              }
               
            </div>
        </div>
        </div>
    );
};

export default AllTouristsSports;