import { Link, useLoaderData } from "react-router-dom";


const TouristsSpots = () => {
    const tourismSpots = useLoaderData().slice(0, 9)
    console.log(tourismSpots)
    return (
        <div>
            <h1 className="lg:text-3xl text-center my-[120px] md:text-2xl text-xl font-bold">Tourists Spots Section </h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            
              {
                tourismSpots.map(tourismSpot =>    <div key={tourismSpot._id} data-aos-duration="1000" data-aos="zoom-out-up" className="hover:shadow-2xl card h-[450px] card-compact lg:w-[320] xl:w-96 md:w-[300px] w-[250px] mx-auto bg-base-100 shadow-xl">
                <figure><img className="w-full h-96" src={tourismSpot.image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourismSpot.spotName}</h2>
                    <div className="space-y-2 text-gray-500 font-light">
                       <div className="flex  justify-between">
                       <p>average cost :</p>
                        <span>{tourismSpot.averageCost}</span>
                       </div>
                     
                        <div className="flex w-[100%] justify-between items-center ">
                            <p >Seasonality : </p>
                            <span className=" border border-green-400 p-2 rounded-lg">{tourismSpot.seasonality}</span>
                        </div>
                        <div className="flex">
                            <p>Total Visitors PerYear :</p>
                            <span>{tourismSpot.visitor}</span>
                        </div>
                        <div className="flex">
                            <p>Travel Time :</p>
                            <span>{tourismSpot.travelTime} days</span>
                        </div>
                    </div>
                    <Link to={`/details/${tourismSpot._id}`} className="btn btn-accent">view details</Link>
                    {/* <Link to='details' className="btn btn-accent">view details</Link> */}
                    {/* <button className="btn btn-accent">view details </button> */}
                </div>

            </div>  )
              }
               
            </div>
        </div>
    );
};

export default TouristsSpots;








    {/* <div className="card lg:w-[300px] md:w-[320px] xl:w-[399px] bg-green-300 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div><div className="card lg:w-[300px] xl:w-[399px]  md:w-[320px]  bg-green-300 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div><div className="card lg:w-[300px] xl:w-[399px]  md:w-[320px] bg-green-300 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div><div className="card lg:w-[300px] xl:w-[399px]  md:w-[320px]  bg-green-300 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div><div className="card lg:w-[300px] xl:w-[399px]  md:w-[320px] bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div><div className="card lg:w-[300px] xl:w-[399px]  md:w-[320px]   bg-green-300 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}