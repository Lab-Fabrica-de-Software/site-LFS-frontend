import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SliderProps {
  children?: ReactNode[];
  className?: string;
  autoPlay?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  slidesPerView?: number;
  breakpoints?: Record<string, any>;
}

export default function Slider({
  children = [],
  className,
  autoPlay = true,
  showNavigation = false,
  showPagination = false,
  slidesPerView = 1,
  breakpoints = {},
}: SliderProps) {
  const style = twMerge("w-full", className);

  return (
    <div className={style}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={autoPlay ? { delay: 3000, disableOnInteraction: false } : false}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        breakpoints={breakpoints}
        className="!pb-8"
      >
        {children && children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
