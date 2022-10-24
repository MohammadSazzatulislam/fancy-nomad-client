import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel.css";
import { EffectCoverflow, Pagination } from "swiper";
import BookingCard from "../BookingCard";
import { useLoaderData } from "react-router-dom";

const Carousel = () => {
  const newsCards = useLoaderData();

  console.log(newsCards);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-fit "
      >
        {newsCards.map((news) => (
          <SwiperSlide>
            <BookingCard key={news.id} news={news}></BookingCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
