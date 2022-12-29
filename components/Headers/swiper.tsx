import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "../../src/useWindowDimensions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../../styles/IntroSlider.module.css";

// import required modules
import { Autoplay,Mousewheel, Pagination, Navigation } from "swiper";

import ImageWithFallback from "../../src/utils/ImageWithFallback";

type Props = {
    images:string[];
}

const IntroSlider = ({images}:Props) => {
    let navigation;
    const {width}  = useWindowDimensions();
    if(width>800){navigation=true}else{navigation=false}

  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={navigation}
        modules={[Autoplay,Mousewheel, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {images.map((image,i)=>(
            <SwiperSlide className={styles.swiperSlide} key={i}><ImageWithFallback src={image} alt="" layout="fill" className={styles.img} priority/></SwiperSlide>
        ))}
      </Swiper>
  );
}

export default IntroSlider;
