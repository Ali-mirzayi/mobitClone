import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper";
import styles from "../../styles/Products/Product.module.css"
import Link from "next/link";
import ImageWithFallback from "../../src/utils/ImageWithFallback";
import { Divider,Rating, Button ,Box } from "@mui/material";
import { useEffect,useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PercentSharpIcon from '@mui/icons-material/PercentSharp';
import BasicSpeedDial from "../../src/utils/SpeedDial";
import ReadMore from "../../src/utils/ReadMore";

function Product({ product }: any) {
    const colors = ["white","blue","pink"];
    const [rating,setRating] = useState(1);
    const [color,setColor] = useState(colors[0]);
    const [showMore,setShowMore] = useState(false);
    useEffect(()=>{
        setRating(()=>Math.floor(Math.random() * (40) + 10)/10)
    },[])
    
    const title = `about ${product.title}`
    const readmore =`${product.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.`
    const showmore= () => {}
    return (<>
    <div style={{ minHeight: "100vh",padding:"10px" }}>
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
         <div style={{background: "linear-gradient(270deg, transparent 10%, rgba(244,162,255,1) 100%)"}} className={styles.secIntro}>
            <MenuBookIcon sx={{color:"white", margin:"10px"}} />About this item</div>
        <ReadMore text={[readmore,title]} />
        <ReadMore text={[readmore,title]} />
        <ReadMore text={[readmore,title]} />

        <div style={{background: "linear-gradient(270deg, transparent 10%, rgba(0,228,255,1) 100%)"}} className={styles.secIntro}>
            <MenuBookIcon sx={{color:"white", margin:"10px"}} />Technical Details</div>
    </div>
    <BasicSpeedDial title={product.title} />
    <a href="https://api.whatsapp.com/send?text=YourShareTextHere" target="blank">salam</a>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",backgroundColor:"grey",position:"sticky",bottom:"0",color:"white",zIndex:4}}>
                <div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <Box sx={{backgroundColor: 'error.light'}} className={styles.disCount}>
                               <span style={{fontSize:'20px'}}>{product.id}</span>
                               <PercentSharpIcon sx={{fontSize:"16px"}}/>
                       </Box>
                       <span style={{textDecoration: 'line-through',fontSize:"17px"}}>{product.price*(100+product.id)/100}</span>
                     </div>
                  <div dir="rtl"><span style={{fontSize:"20px"}}>{product.price}</span><span>&ensp;تومان</span></div>
                </div>
                <div>
                  <Button sx={{background:"red"}}>Add to Card</Button>
                </div>
    </div>
  </>);
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