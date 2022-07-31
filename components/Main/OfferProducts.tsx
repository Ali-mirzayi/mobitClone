import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import useSWR from 'swr';
import CountdownTimer from '../../src/CountdownTimer';
import styles from '../../styles/Main/OfferProducts.module.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PercentSharpIcon from '@mui/icons-material/PercentSharp';

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Lazy,Mousewheel, Navigation } from "swiper";
import Image from 'next/image';

function OfferProducts() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('https://api.escuelajs.co/api/v1/products?offset=0&limit=30', fetcher)
    if (error) return <div>an error has occured.pls check your network</div>;
    if (!data) return <div style={{backgroundColor:'#000000',opacity:'0.5',width:'225px',height:'150px',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress /></div>
    // const images=item.flat()
    let id=20;
    console.log(233*(100+id)/100);
    

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
        <CountdownTimer countdownTimestampMs={1659923662000} />
        <Box>
            <Swiper
                dir="rtl"
                lazy={true}
                mousewheel={true}
                navigation={true}
                modules={[Lazy,Mousewheel, Navigation]}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.50": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                >
                {data.map((item: item) => (
                    <SwiperSlide key={item.id}>
                        <Box className={styles.Box} dir='rtl'>
                       <div style={{position:'relative'}}>
                        <div className={styles.discountContainer}>
                            <Box sx={{backgroundColor: 'error.light'}} className={styles.discount}>
                               <span style={{fontSize:'30px'}}>{item.id}</span>
                               <PercentSharpIcon />
                            </Box>
                        <div style={{width:'30px',height:'30px'}}/>
                        </div>
                         <Image src={item.images[0]} width='225px' height='150px' alt="" className={styles.image}/>
                             <p>{item.title}</p>
                        <div style={{display:'flex',flexDirection:'row-reverse'}}>
                        <span>قیمت:{item.price}</span>
                        <span style={{textDecoration: 'line-through',marginLeft:'10px'}}>{item.price*(100+item.id)/100}</span>
                        </div>
                        </div>
                        </Box>
                        </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </section>);
}

export default OfferProducts;