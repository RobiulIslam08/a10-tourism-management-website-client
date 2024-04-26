
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        autoplay={
          {
            delay:2000
          }
        }
        className="mySwiper h-[200px] mt-20 md:h-[400px] lg:h-[500px]"
      >
        <SwiperSlide>
       
          <div className='relative'>
            <img className='w-full bg-cover  object-cover'
              src="
              https://i.ibb.co/y05nQNT/6560cb78a3727966adfbf2b8-356119658.jpg"
              loading="lazy"
            />
         
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'> Chiang Mai  </div>
   
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full  object-cover'
              src=" https://i.ibb.co/t8B1TdN/Nilgiri.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'>Bandarban</div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full bg-cover  object-fill'
              src="https://i.ibb.co/bJQxTc6/TH201170.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'>Phnom Penh</div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full bg-cover  object-cover'
              src="https://i.ibb.co/7t9zb9N/Exploring-Coxs-Bazar.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'>Cox’s Bazar</div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
    

      </Swiper>

    </>
  );
};

export default Slider;


// https://i.ibb.co/y05nQNT/6560cb78a3727966adfbf2b8-356119658.jpg
// https://i.ibb.co/t8B1TdN/Nilgiri.jpg
// https://i.ibb.co/3CYtPYc/images-2.jpg
// https://i.ibb.co/7t9zb9N/Exploring-Coxs-Bazar.jpg