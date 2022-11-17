import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper";
import styles from "../../styles/Products/Product.module.css"
import Link from "next/link";
import ImageWithFallback from "../../src/utils/ImageWithFallback";
import { Divider,Rating } from "@mui/material";
import { useEffect,useState,useRef } from "react";
import CheckIcon from '@mui/icons-material/Check';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BasicSpeedDial from "../../src/utils/SpeedDial";
import ReadMore from "../../src/utils/ReadMore";
import Useless from "../../src/ProductPage/Useless";
import AddCart from "../../src/ProductPage/AddCart";
import SimilarItems from "../../src/ProductPage/SimilarItems";
import { Link as forward, scrollSpy } from 'react-scroll';
import SubNav from "../../src/ProductPage/SubNav";

function Product({ product }: any) {
    const colors = ["white","blue","pink"];
    const [rating,setRating] = useState(1);
    const [color,setColor] = useState(colors[0]);
    useEffect(()=>{
        setRating(()=>Math.floor(Math.random() * (40) + 10)/10)
    },[])

    // mock data i use to readmore section
    const title = `about ${product.title}`
    const readmore =`${product.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.`
    return (<div id="Overview" style={{marginBottom:50,height:"600vh"}}>
    <div style={{ padding:"10px" }}>
        <SubNav/>
        <div style={{ width: "fit-content", margin: "20px" }}><Link href={`/categories/${product.category.name}`}><a><h2>{product.category.name}</h2></a></Link></div>
        <div style={{ borderRadius: "10px", overflow: "hidden", width: "fit-content", margin: "auto" }}>
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
                {product.images.map((image: any, i: any) => (
                    <SwiperSlide key={i}><ImageWithFallback src={image} alt="" layout="fill" className={styles.img} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
        {product.title}
        <Divider sx={{margin:"0 20px"}}>{`product-${product.id}`}</Divider>
        <div style={{ display:"flex" , justifyContent:"space-between"}}>
            <span>brand:</span>
            <span>something</span>
        </div>
        <div style={{ display:"flex" , justifyContent:"space-between"}}>
            <span>category:</span>
            <span><div style={{ width: "fit-content" }}><Link href={`/categories/${product.category.name}`}><a>{product.category.name}</a></Link></div></span>
        </div>
        <div style={{ display:"flex" , justifyContent:"space-between"}}>
            <span>rating:</span>
            <span>{rating}</span>
        </div>
        <Divider sx={{margin:"0 20px"}}/>
        <div style={{ display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
            <span style={{margin:"5px"}}>color:</span>
            <span style={{fontSize:"20px",margin:"5px"}}>{color}</span>
        </div>
        {/* color picker */}
        <div style={{display:"flex",margin:"auto",width:"fit-content"}}>
            {colors.map((c,i)=> {
                return(
                    <button 
                     key={i} 
                     style={{backgroundColor: c}}
                     className={color===c ? `${styles.active} ${styles.inActive}` : styles.inActive}
                     onClick={()=>setColor(c)}>{color===c ? <CheckIcon/> : null}
                     </button>
                )
            })}
         </div>
         <div id="one">
         <div style={{background: "linear-gradient(270deg, transparent 10%, rgba(244,162,255,1) 100%)"}} className={styles.secIntro}>
            <MenuBookIcon sx={{color:"white", margin:"10px"}} />About this item</div>
            <ReadMore text={[readmore,title]} />
            <ReadMore text={[readmore,title]} />
            <ReadMore text={[readmore,title]} />
        </div>
        <div id="two">
             <div style={{background: "linear-gradient(270deg, transparent 10%, rgba(0,228,255,1) 100%)"}} className={styles.secIntro}>
                <MenuBookIcon sx={{color:"white", margin:"10px"}} />Technical Details</div>
                <Useless/>
        </div>
  </div>
    <BasicSpeedDial title={product.title} /> 
    <h2 style={{textAlign:"center"}}>Similar Items</h2>
    <div  id="three">
        <SimilarItems category={product.category.id}/>
    </div>
    <AddCart product={product}/>
  </div>);
}

export default Product;

export async function getStaticPaths() {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await response.json();
    const paths = data.map((item: any) => {
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


export async function getStaticProps(context: any) {
    const { params } = context;
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
    const data = await response.json();
    return {
        props: {
            product: data,
        },
    }
}