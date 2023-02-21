import { useQuery } from 'react-query';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Lazy, Mousewheel, Navigation } from "swiper";
import ProductBox from '../../src/ProductBox';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SimilarItems({ category,host }: any) {
    const { data, isLoading } = useQuery(['GetProductsCategory', category], () => fetcher(`http://${host}/api/similarity/${category}`));
    if (isLoading) return <div>Loading...</div>;

    return (<div style={{ width: "95%", margin: "20px auto", backgroundColor: "#b2adec", borderRadius: "10px" }}>
        <Swiper
            dir="rtl"
            lazy={true}
            mousewheel={true}
            navigation
            modules={[Lazy, Mousewheel, Navigation]}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@0.50": {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
        >
            {data?.map((item: any) => (
                <SwiperSlide key={item.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", margin: "20px 0" }} dir='rtl'>
                        <ProductBox item={item} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>);
}

export default SimilarItems;