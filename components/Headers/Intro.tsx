import { useQuery } from 'react-query';
import IntroSlider from './swiper';
import React from 'react'
import styles from '../../styles/Intro.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import ImageWithFallback from '../../src/utils/ImageWithFallback';

const Intro = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, isError, isLoading } = useQuery('Intro', () => fetcher('https://api.escuelajs.co/api/v1/products/20'))
    const { data: watch, isError: error, isLoading: loading } = useQuery('MissingIntro', () => fetcher('https://api.escuelajs.co/api/v1/products/24'))
    if (isError || error) return <div>an error has occured.</div>;
    if (isLoading || loading) return <div style={{ display: "flex", width: "60vw", height: "40vw", justifyContent: "space-between", alignItems: 'center', margin: 'auto' }} ><CircularProgress size="5em" /><CircularProgress size="7em" /><CircularProgress size="5em" /></div>;
    const images: string[] = data.images;
    const src: any = watch.images;
    
    return (<>
        <div className={styles.container}>
            <Link href={`/categories/${watch.category.name}`}>
                <div className={styles.div}>
                    <ImageWithFallback src={src[0]} alt='' fill className={styles.img} />
                    <p className={styles.p}>{watch.category.name}</p>
                </div>
            </Link>
            <a style={{margin:"auto"}} href={`/categories/${data.category.name}`}>
                <IntroSlider images={images} />
            </a>
            <Link href={`/categories/${watch.category.name}`}>
                <div className={styles.div}>
                    <ImageWithFallback src={src[2]} alt='' fill className={styles.img} />
                    <p className={styles.p}>{watch.category.name}</p>
                </div>
            </Link>
        </div>
    </>);
}

export default Intro;