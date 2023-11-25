'use client';
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'

// import required modules
import {
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [
  '/images/hero_1.png',
  '/images/hero_1.png',
  '/images/hero_1.png',
  '/images/hero_1.png',
];

const Hero = () => {
  return (
    <div className="w-full md:h-[42vh] py-10 bg-gray-500 bg-cover bg-center bg-no-repeat overflow-hidden relative">
      <Swiper
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          height: '100%',
          overflow: 'hidden',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ FreeMode, Navigation, Thumbs, Pagination]}
        className="main-swiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`images_` + i} className="!h-auto">
            <Image
              alt={image}
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                objectFit: 'contain',
              }}
              placeholder="blur"
              blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
