import useSWR from 'swr';
import IntroSlider from './swiper';
import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Intro.module.css';
import CircularProgress from '@mui/material/CircularProgress';

const Intro = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('https://api.escuelajs.co/api/v1/products/114', fetcher)
    const { data: watch, error: Werror } = useSWR("https://api.escuelajs.co/api/v1/products/18", fetcher)
    if (error || Werror) return <div>an error has occured.</div>;
    if (!data || !watch) return <div style={{display:"flex", width: "60vw", height: "40vw",justifyContent:"space-between",alignItems:'center',margin:'auto'}} ><CircularProgress size="5em"/><CircularProgress size="5em"/><CircularProgress size="5em"/></div>;
    const src: string[] = watch.images;
    const images: string[] = data.images;

    let name
    switch(watch.category.name){
        case "Shoes":
            name="کفش"
            break;
        case "Electronics":
            name="ساعت"
            break;
        case "Clothes":
            name="لباس"
            break;
        case "Clothes":
            name="لباس"
            break;
        case "Furniture":
            name="صندلی و مبل"
            break;
        default:
            name="متفرقه"
    }
    
    return (<>
        <div className={styles.container}>
            <div className={styles.div}>
                <Image src={src[0]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                <p className={styles.p}>{name}</p>
            </div>
            <IntroSlider images={images} />
            <div className={styles.div}>
                <Image src={src[2]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                <p className={styles.p}>{name}</p>
            </div>
        </div>
    </>);
}

export default Intro;