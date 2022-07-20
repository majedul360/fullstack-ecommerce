import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderItems } from "../../../data";
import "./Slider.scss";
const Slider = () => {
  return (
    <Swiper
      className="slide-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop={true}
    >
      {sliderItems.map((iteam) => (
        <SwiperSlide key={iteam.id} className="slide">
          <div className="container" style={{ background: iteam.bg }}>
            <div className="box">
              <img src={iteam.img} alt="" />
            </div>
            <div className="box">
              <h3>{iteam.title.split(" ")[0]}</h3>
              <h3>{iteam.title.split(" ")[1]}</h3>
              <p>{iteam.desc}</p>
              <span className="btn">shop now</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
