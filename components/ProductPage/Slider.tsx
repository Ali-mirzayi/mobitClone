import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Mousewheel, Pagination, Navigation, FreeMode, Thumbs } from "swiper";
import ImageWithFallback from "../../src/ImageWithFallback";
import styles from './Slider.module.css';
import { Paper } from "@mui/material";
import useWindowDimensions from "../../src/useWindowDimensions";

function Intro({ product,setWidth }: any) {
        const { width } = useWindowDimensions();
        setWidth(width);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <Paper style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "17px 0.5rem", paddingBottom: 0, borderRadius: "10px" }}>
            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
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
                >
                    {product.images.map((image: any, i: any) => (
                        <SwiperSlide key={i}><ImageWithFallback src={image} alt={product.title} priority fill className={styles.img} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div style={{ padding: "5px", borderRadius: "10px", overflow: "hidden" }}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.mySwiper2}
                >
                    {product.images.map((image: any, i: any) => (
                        <SwiperSlide key={i} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className={styles.imgcontainer} style={{ position: "relative", borderRadius: "7px", overflow: "hidden", cursor: "pointer" }}>
                                <ImageWithFallback src={image} alt={product.title} priority fill className={styles.img2} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Paper>
    );
}

export default Intro;