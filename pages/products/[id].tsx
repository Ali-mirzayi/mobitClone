import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Mousewheel, Pagination, Navigation } from "swiper";
import styles from "../../styles/Products/Products.module.css"
import Link from "next/link";


function Product({product}:any) {
    
    return ( <>
    <Link href={`/categories/${product.category.name}`}><a><h1>{product.category.name}</h1></a></Link>
    {product.title}<hr />
    {product.description}<hr />
    {product.price}<hr />
    <div style={{borderRadius:"10px",overflow:"hidden",width:"fit-content"}}>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {product.images.map((image:any,i:any)=>(
            <SwiperSlide key={i}><Image src={image} alt="" layout="fill" className={styles.img}/></SwiperSlide>
        ))}
      </Swiper>
    </div>
    </> );
}

export default Product;

export async function getStaticPaths(){
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await response.json();
    let uuu;
    const paths = data.map((item:any)=>{
        return {
            params: {
                id: `${item.id}`
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps(context:any){
    const { params } = context;
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
    const data = await response.json();
     return {
        props: {
            product: data,
        },
     }
}