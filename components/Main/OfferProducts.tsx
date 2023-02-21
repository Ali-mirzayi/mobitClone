import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query';
import CountdownTimer from '../../src/CountdownTimer';
import styles from '../../styles/Main/OfferProducts.module.css';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Lazy, Mousewheel, Navigation } from "swiper";
import ProductBox from '../../src/ProductBox';


function OfferProducts() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, isError, isLoading } = useQuery('OfferProducts', () => fetcher('https://api.escuelajs.co/api/v1/products?offset=0&limit=30'));
    let navigation;
    if (isError) return <div>an error has occured.pls check your network</div>;
    if (isLoading) return <div style={{ backgroundColor: '#000000', opacity: '0.5', width: '100vw', height: '150px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}><CircularProgress /><CircularProgress /><CircularProgress /><CircularProgress /></div>
    if (window.innerWidth > 800) { navigation = true } else { navigation = false };

    type item = {
        "id": number;
        "title": string;
        "price": number;
        "description": string;
        "category": {
            "id": number;
            "name": string;
            "image": string;
        }
        "images": string[]
    }

    return (<section>
        <CountdownTimer />
        <div>
            <Swiper
                dir="rtl"
                lazy={true}
                mousewheel={true}
                navigation={navigation}
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
                {data?.map((item: item) => (
                    <SwiperSlide key={item.id}>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", margin: "20px 0" }} dir='rtl'>
                            <ProductBox item={item} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>);
}

export default OfferProducts;