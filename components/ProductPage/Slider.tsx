import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Mousewheel, Pagination, Navigation, FreeMode, Thumbs } from "swiper";
import ImageWithFallback from "../../src/utils/ImageWithFallback";
import styles from './Slider.module.css';

function Intro({ product }: any) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <div>
            <div style={{ borderRadius: "10px", overflow: "hidden", width: "fit-content" }}>
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
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation={true}
                    modules={[Mousewheel, Pagination, Navigation, FreeMode, Thumbs]}
                    className={styles.mySwiper}
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }}
                >
                    {product.images.map((image: any, i: any) => (
                        <SwiperSlide key={i}><ImageWithFallback src={image} alt={product.title} priority layout="fill" className={styles.img} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.mySwiper2}
                >
                    {product.images.map((image: any, i: any) => (
                        <SwiperSlide key={i}>
                            <div>
                                <ImageWithFallback src={image} alt={product.title} priority layout="fill" className={styles.img2} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Intro;