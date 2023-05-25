'use client';
import Image from 'next/image'
import Header from './components/Header'
import ForSale from './components/ForSale';
import 'swiper/css';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start'>
      <Header />
      <ForSale />
      {/* <HomeImageSlider /> */}
    </div>
  )
}

// export function HomeImageSlider() {
//   const windowSize = useRef([window.innerWidth, window.innerHeight]);
//   return(
//       <Swiper
//         spaceBetween={5}
//         slidesPerView={windowSize.current[0] < 768 ? 1 : 2}
//         onSlideChange={()=>console.log("Slide Changed")}
//         onSwiper={(swiper)=>console.log(swiper)}
//         direction='horizontal'
//         className="w-[97vw] h-[30vh] rounded-lg">
//         <SwiperSlide className='h-full'><Image className='w-full h-full object-cover' src="/jazmin_britt.png" width={1000} height={1000} loading="eager" alt="jazmin_britt" quality={100}/></SwiperSlide>
//         <SwiperSlide className='h-full'><Image className='w-full h-full object-cover' src="/nickback.png" width={1000} height={1000} loading="eager" alt="nickback" quality={100}/></SwiperSlide>
//         <SwiperSlide className='h-full'><Image className='w-full h-full object-cover' src="/matt_jaymo.png" width={1000} height={1000} loading="eager" alt="matt_jaymo" quality={100}/></SwiperSlide>
//         <SwiperSlide className='h-full'><Image className='w-full h-full object-cover' src="/FWPROMO.png" width={1000} height={1000} loading="eager" alt="FWPROMO" quality={100}/></SwiperSlide>
//         <SwiperSlide className='h-full'><Image className='w-full h-full object-cover' src="/brino7.png" width={640} height={427} loading="eager" alt="brino7" quality={100}/></SwiperSlide>
//       </Swiper>
//   )
// }
