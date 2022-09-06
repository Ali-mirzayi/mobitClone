import { Box, Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery,UseQueryResult } from 'react-query';
// import CountdownTimer from 'src/CountdownTimer';
import CountdownTimer from '../../src/CountdownTimer';
import styles from '../../styles/Main/OfferProducts.module.css';
import React from "react";
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
import ImageWithFallback from '../../src/utils/ImageWithFallback';
import Link from 'next/link';


function OfferProducts() {
    const fetcher = (url:string) => fetch(url).then((res) => res.json());
    const { data , isError , isLoading} = useQuery('OfferProducts',() => fetcher ('https://api.escuelajs.co/api/v1/products?offset=20&limit=40'));
    let navigation;
    if (isError) return <div>an error has occured.pls check your network</div>;
    if (isLoading) return <div style={{backgroundColor:'#000000',opacity:'0.5',width:'225px',height:'150px',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress /></div>
    if(window.innerWidth>800){navigation=true}else{navigation=false}
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
        <CountdownTimer countdownTimestampMs={1664123662000} />
        <Box>
            <Swiper
                dir="rtl"
                lazy={true}
                mousewheel={true}
                navigation={navigation}
                modules={[Lazy,Mousewheel, Navigation]}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
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
                {data.map((item: item) => (
                    <SwiperSlide key={item.id}>
                        <Box className={styles.Box} dir='rtl'>
                       <Paper elevation={3} className={styles.paper}>
                        <div style={{visibility:'visible'}}>
                        <div className={styles.discountContainer}>
                            <Box sx={{backgroundColor: 'error.light'}} className={styles.discount}>
                               <span style={{fontSize:'30px'}}>{item.id}</span>
                               <PercentSharpIcon />
                            </Box>
                        <div style={{width:'30px',height:'30px'}}/>
                        </div>
                        <Link href={`products/${item.id}`} passHref>
                            <a>
                              <div className={styles.imageContainer}>
                                <ImageWithFallback src={item.images[0]} width='225px' height='150px' alt="" className={styles.image} />
                              </div>
                            </a>
                         </Link>
                             <p style={{marginRight: '20px'}}>{item.title}</p>
                          <div style={{display:'flex',flexDirection:'row-reverse'}}>
                          <span style={{margin: '0 20px'}}>قیمت:{item.price}</span>
                          <span style={{textDecoration: 'line-through'}}>{item.price*(100+item.id)/100}</span>
                          </div>
                          </div>
                          </Paper>
                        </Box>
                        </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </section>);
}

export default OfferProducts;