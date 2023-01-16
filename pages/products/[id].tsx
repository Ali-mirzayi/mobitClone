import Head from 'next/head';
import styles from "../../styles/Products/Product.module.css"
import Link from "next/link";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BasicSpeedDial from "../../src/utils/SpeedDial";
import ReadMore from "../../src/utils/ReadMore";
import Useless from "../../src/ProductPage/Useless";
import AddCart from "../../src/ProductPage/AddCart";
import SimilarItems from "../../src/ProductPage/SimilarItems";
import SubNav from "../../src/ProductPage/SubNav";
import Intro from '../../components/ProductPage/Slider';
import axios from 'axios';

function Product({ product }: any) {
    const colors = ["white", "blue", "pink"];
    const [rating, setRating] = useState(1);
    const [color, setColor] = useState(colors[0]);
    useEffect(() => {
        setRating(() => Math.floor(Math.random() * (40) + 10) / 10)
    }, [])

    // mock data i use to readmore section
    const title = `about ${product.title}`
    const readmore = `${product.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse, tempore aspernatur, eveniet quos beatae, ipsam explicabo non omnis voluptatum numquam fuga quisquam. Impedit architecto cupiditate deserunt assumenda deleniti nostrum.`
    return (<div style={{ marginBottom: 50 }}>
        {product ?
            <div><Head>
                <title>{product.title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="description" content="its my mobit clone" />
                <link rel="icon" href="/gta-home-logo.jpg" />
            </Head>
                <div style={{ padding: "10px" }}>
                    <SubNav />
                    <div style={{ width: "fit-content", margin: "20px auto" }}>
                        <Link href={`/categories/${product.category.name}`}><h2 className={styles.category}>{product.category.name}</h2></Link>
                        <Intro product={product} />
                    </div>
                    {product.title}
                    <Divider sx={{ margin: "0 20px" }}>{`product-${product.id}`}</Divider>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>brand:</span>
                        <span>something</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>category:</span>
                        <span><div style={{ width: "fit-content" }}><Link href={`/categories/${product.category.name}`}>{product.category.name}</Link></div></span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>rating:</span>
                        <span>{rating}</span>
                    </div>
                    <Divider sx={{ margin: "0 20px" }} />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <span style={{ margin: "5px" }}>color:</span>
                        <span style={{ fontSize: "20px", margin: "5px" }}>{color}</span>
                    </div>
                    {/* color picker */}
                    <div style={{ display: "flex", margin: "auto", width: "fit-content" }}>
                        {colors.map((c, i) => {
                            return (
                                <button
                                    key={i}
                                    style={{ backgroundColor: c }}
                                    className={color === c ? `${styles.active} ${styles.inActive}` : styles.inActive}
                                    onClick={() => setColor(c)}>{color === c ? <CheckIcon /> : null}
                                </button>
                            )
                        })}
                    </div>
                    <div id="nav">
                        <div id="one">
                            <div style={{ background: "linear-gradient(270deg, transparent 10%, rgba(244,162,255,1) 100%)" }} className={styles.secIntro}>
                                <MenuBookIcon sx={{ color: "white", margin: "10px" }} />About this item</div>
                            <ReadMore text={[readmore, title]} />
                            <ReadMore text={[readmore, title]} />
                            <ReadMore text={[readmore, title]} />
                        </div>
                        <div id="two">
                            <div style={{ background: "linear-gradient(270deg, transparent 10%, rgba(0,228,255,1) 100%)" }} className={styles.secIntro}>
                                <MenuBookIcon sx={{ color: "white", margin: "10px" }} />Technical Details</div>
                            <Useless />
                        </div>
                        <div id="three">
                            <h2 style={{ textAlign: "center" }}>Similar Items</h2>
                            <SimilarItems category={product.category.id} />
                        </div>
                    </div>
                </div>
                <BasicSpeedDial title={product.title} />
                <AddCart product={product} /></div> :
            <div>
                <Head>
                    <title>undefind</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="description" content="its my mobit clone" />
                    <link rel="icon" href="/gta-home-logo.jpg" />
                </Head>
                <div>
                   wait...
                </div>
            </div>}
    </div>
    );
}

export default Product;

export async function getServerSideProps(context: any) {
    const { params } = context;
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
    return {
        props: {
            product: response.data,
        },
    }
}