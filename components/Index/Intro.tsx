import { useQuery } from 'react-query';
import IntroSlider from './swiper';
import React from 'react'
import styles from '../../styles/Intro.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import ImageWithFallback from '../../src/ImageWithFallback';

const Intro = ({host}:{host:string}) => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, isError, isLoading } = useQuery('Intro', () => fetcher(`https://${host}/api/products/20`))
    const { data: watch, isError: error, isLoading: loading } = useQuery('MissingIntro', () => fetcher(`https://${host}/api/products/21`))
    if (isError) return <div>an error has occured.</div>;
    if (error) return <div>an error has occured.</div>;
    if (isLoading || loading) return <div style={{ display: "flex", width: "60vw", height: "40vw", justifyContent: "space-between", alignItems: 'center', margin: 'auto' }} ><CircularProgress size="5em" /><CircularProgress size="7em" /><CircularProgress size="5em" /></div>;

    console.log(watch[0]?.images,'imgs');

    return (<>
        <div className={styles.container}>
            <Link href={`/categories/${watch[0]?.category.name}`}>
                <div className={styles.div}>
                    <ImageWithFallback src={watch[0]?.images[0]} alt='' fill className={styles.img} />
                    <p className={styles.p}>{watch[0]?.category.name}</p>
                </div>
            </Link>
            <a style={{ margin: "auto" }} href={`/categories/${data[0]?.category.name}`}>
                <IntroSlider images={data[0]?.images} />
            </a>
            <Link href={`/categories/${watch[0]?.category.name}`}>
                <div className={styles.div}>
                    <ImageWithFallback src={watch[0]?.images[2]} alt='' fill className={styles.img} />
                    <p className={styles.p}>{watch[0]?.category.name}</p>
                </div>
            </Link>
        </div>
    </>);
}

export default Intro;