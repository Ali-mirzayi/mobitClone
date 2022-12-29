import Image from "next/image";
import styles from '../../styles/MissingIntro.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function MissingIntro() {
    const { data, isError, isLoading } = useQuery('MissingIntro', () => fetcher('https://api.escuelajs.co/api/v1/products/21'))
    if (isError) return <div>an error has occured.</div>;
    if (isLoading) return <div style={{ display: "flex", width: "60vw", height: "40vw", justifyContent: "space-between", alignItems: 'center', margin: 'auto' }} ><CircularProgress size="5em" /><CircularProgress size="5em" /></div>;

    const src: any = data.images;
    
    return (
        <section style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
            <Link href={`/categories/${data.category.name}`}>
                <div className={styles.div}>
                    <Image src={src[0]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                    <p className={styles.p}>{data.category.name}</p>
                </div>
            </Link>
            <Link href={`/categories/${data.category.name}`}>
                <div className={styles.div}>
                    <Image src={src[2]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                    <p className={styles.p}>{data.category.name}</p>
                </div>
            </Link>
        </section>);
}

export default MissingIntro;