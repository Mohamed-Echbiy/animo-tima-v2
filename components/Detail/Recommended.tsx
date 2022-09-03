import React from "react";
import { dataOb } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Recommended({ data }) {
  console.log(data);
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Recommended;
