
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Details = () => {


  const product = useLoaderData()
  return (
    <div className='mb-8 lg:mb-20'>
      {/* <img src={product.image} className='w-full  h-[300px]' alt="" /> */}
      <div className="relative w-full h-[300px]">
        <img src={product.image} className='w-full h-full object-cover absolute' alt={product.estate_title || 'Product Image'} />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <p   className='relative text-2xl flex justify-center items-center top-14 font-semibold text-white'>{product.spotName}</p>
      </div>
      <h1  data-aos="fade-right" className="lg:text-3xl  text-xl font-bold my-5 lg:my-9">{product.visitors}</h1>
      <p  data-aos="fade-right" className="text-gray-600 mb-5 lg:mb-8">{product.description} this product is very new and you can buy it. {product.description}</p>
      <div className="overflow-x-auto">
        <table  data-aos="fade-right" className=" border border-slate-500 w-full text-gray-600">

          <tbody>
          <tr >
              <td className="border border-slate-700 font-semibold">Country Name</td>
              <td className="border border-slate-700 ">{product.country}</td>
            </tr>
            <tr >
              <td className="border border-slate-700 font-semibold">Location</td>
              <td className="border border-slate-700 ">${product.location}</td>
            </tr>
            <tr >
              <td className="border border-slate-700 font-semibold">Average Cost</td>
              <td className="border border-slate-700 ">${product.averageCost}</td>
            </tr>
            <tr>
              <td className="border border-slate-700 font-semibold">Seasionality</td>
              <td className="border border-slate-700 ">{product.seasonality}</td>
            </tr>
            <tr>
              <td className="border border-slate-700 font-semibold">Travel Time</td>
              <td className="border border-slate-700 ">{product.travelTime} days</td>
            </tr>
            <tr >
              <td className="border border-slate-700 font-semibold">Visitor</td>
              <td className="border border-slate-700 ">{product.visitor} people</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;