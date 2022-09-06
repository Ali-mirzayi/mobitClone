import Image from "next/image";
import styles from '../../styles/MissingIntro.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function MissingIntro() {
    const { data, isError, isLoading} = useQuery('MissingIntro',() => fetcher('https://dummyjson.com/products/category/lighting'))
    if (isError) return <div>an error has occured.</div>;
    if (isLoading) return <div style={{ display: "flex", width: "60vw", height: "40vw", justifyContent: "space-between", alignItems: 'center', margin: 'auto' }} ><CircularProgress size="5em" /><CircularProgress size="5em" /></div>;
    
    // let name
    // switch(data.category.name){
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
    const src: string[] = data.products[0].images;
    return (
        <section style={{ display:'flex',justifyContent:'space-evenly',marginTop:'20px'}}>
            <div className={styles.div}>
                <Image src={src[0]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                <p className={styles.p}>{data.products[0].brand}</p>
            </div>
            <div className={styles.div}>
                <Image src={src[2]} alt='' width="22vw" height="17vw" layout='responsive' className={styles.img} />
                <p className={styles.p}>{data.products[1].brand}</p>
            </div>
        </section>);
}

export default MissingIntro;