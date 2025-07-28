import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactNode } from "react";

interface SliderProps{
  children: ReactNode[];
  className?: string;
}

export default function Tag({className}:SliderProps){
const style = twMerge("text-black/70 text-xl font-bold",className )

return(
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
);
}