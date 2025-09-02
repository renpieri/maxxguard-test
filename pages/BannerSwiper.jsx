import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const BannerSwiper = () => {
  return (
      <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,       
            disableOnInteraction: false, 
          }}
          speed={1500} 
          loop={true}
        >
          <SwiperSlide>
            <picture>
              <source media="(max-width: 639px)" srcSet="img/banner-1-mobile.png" />
              <source media="(max-width: 1023px) and (min-width: 640px)" srcSet="img/banner-1-tablet.png" />
              <img className="img-slider" src="img/banner-1-pc.png" alt="Banner" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width: 639px)" srcSet="img/banner-2-mobile.png" />
              <source media="(max-width: 1023px) and (min-width: 640px)" srcSet="img/banner-2-tablet.png" />
              <img className="img-slider" src="img/banner-2-pc.png" alt="Banner" />
            </picture>
          </SwiperSlide>
        </Swiper>
  )
}

export default BannerSwiper