'use client';
import 'swiper/css/navigation'

import React, {
  Suspense,
  useState,
} from 'react'

import Image from 'next/image'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// import { formatCurr } from '@/lib/utils'

import Heading from './Heading'
import ProductCard from './ProductCard'

const productItems = [
  {
    imageSrc: '/images/perfume_1.png',
    name: 'Euodia 1',
    price: '200000',
    description: 'Lorem ipsum',
  },
  {
    imageSrc: '/images/perfume_2.png',
    name: 'Euodia 2',
    price: '500000',
    description: 'Lorem ipsum',
  },
  {
    imageSrc: '/images/perfume_1.png',
    name: 'Euodia 3',
    price: '1500000',
    description: 'Lorem ipsum',
  },
  {
    imageSrc: '/images/perfume_2.png',
    name: 'Euodia 4',
    price: '2000000',
    description: 'Lorem ipsum',
  },
  {
    imageSrc: '/images/perfume_2.png',
    name: 'Euodia 4',
    price: '2000000',
    description: 'Lorem ipsum',
  },
  {
    imageSrc: '/images/perfume_2.png',
    name: 'Euodia 4',
    price: '2000000',
    description: 'Lorem ipsum',
  },
  {
    imageSrc: '/images/perfume_2.png',
    name: 'Euodia 4',
    price: '2000000',
    description: 'Lorem ipsum',
  },
  {
    imageSrc: '/images/perfume_2.png',
    name: 'Euodia 4',
    price: '2000000',
    description: 'Lorem ipsum',
  },
];

const NewProducts = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-10">
      <Heading label="Terbaru" />

      <div className="flex flex-row gap-4 h-[42vh]">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="new-product"
        >
          {productItems.map((product, i) => (
            <SwiperSlide key={product.name + i}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewProducts;
