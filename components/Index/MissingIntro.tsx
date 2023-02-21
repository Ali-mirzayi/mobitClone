import styles from '../../styles/MissingIntro.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query';
import Link from 'next/link';
import ImageWithFallback from "../../src/ImageWithFallback";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function MissingIntro({host}:{host:string}) {
    const { data, isError, isLoading } = useQuery('MissingIntro', () => fetcher(`http://${host}/api/products/21`))
    if (isError) return <div>an error has occured.</div>;
    if (isLoading) return <div style={{ display: "flex", width: "60vw", height: "40vw", justifyContent: "space-between", alignItems: 'center', margin: 'auto' }} ><CircularProgress size="5em" /><CircularProgress size="5em" /></div>;

    return (
        <section style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
             <Link href={`/categories/${data[0]?.category.name}`}>
                 <div className={styles.div}>
                     <ImageWithFallback src={data[0]?.images[0]} alt={data[0]?.title} fill className={styles.img} />
                     <p className={styles.p}>{data[0]?.category.name}</p>
                 </div>
             </Link>
             <Link href={`/categories/${data[0]?.category.name}`}>
                 <div className={styles.div}>
                     <ImageWithFallback src={data[0]?.images[2]} alt={data[0]?.title} fill className={styles.img} />
                     <p className={styles.p}>{data[0]?.category.name}</p>
                 </div>
             </Link>
        </section>
    );
}

export default MissingIntro;
// width="22vw" height="17vw"