import { useQuery } from 'react-query';
import IntroSlider from './swiper';
import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Intro.module.css';
import CircularProgress from '@mui/material/CircularProgress';

const Intro = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, isError, isLoading } = useQuery('Intro', () => fetcher('https://dummyjson.com/products/category/furniture'))
    const { data: watch, isError: error , isLoading:loading} = useQuery('MissingIntro',() => fetcher('https://dummyjson.com/products/category/lighting'))
    if (isError || error) return <div>an error has occured.</div>;
    if (isLoading || loading) return <div style={{display:"flex", width: "60vw", height: "40vw",justifyContent:"space-between",alignItems:'center',margin:'auto'}} ><CircularProgress size="5em"/><CircularProgress size="7em"/><CircularProgress size="5em"/></div>;
    const src: string[] = watch.products[0].images;
    const images: string[] = data.products[0].images;
    
    // let name
    // switch(watch.category.name){
    //     case "Shoes":
    //         name="کفش"
    //         break;
    //     case "Electronics":
    //         name="ساعت"
    //         break;
    //     case "Clothes":
    //         name="لباس"
    //         break;
    //     case "Clothes":
    //         name="لباس"
    //         break;
    //     case "Furniture":
    //         name="صندلی و مبل"
    //         break;
    //     default:
    //         name="متفرقه"
    // }
    
    return (<>
        <div className={styles.container}>
            <div className={styles.div}>     
                <Image src={src[0]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                <p className={styles.p}>{data.products[0].brand}</p>
            </div>
                <IntroSlider images={images} />
            <div className={styles.div}>
                <Image src={src[2]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                <p className={styles.p}>{data.products[1].brand}</p>
            </div>
        </div>
    </>);
}

export default Intro;