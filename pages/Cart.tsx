import React from 'react';
import { useRecoilState } from 'recoil';
import { Products } from '../Atoms';
import ImageWithFallback from '../src/utils/ImageWithFallback';
import { Box, Button } from "@mui/material";
import styles from '../styles/Cart/Cart.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PercentSharpIcon from '@mui/icons-material/PercentSharp';
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('../src/utils/Modal'), {
    ssr: false,
})

const insert = (add: any, index: number, newItem: number) => [
    ...add.slice(0, index),
    newItem,
    ...add.slice(index + 1)
];

const remove = (add: any, index: number) => [
    ...add.slice(0, index),
    ...add.slice(index + 1)
];

function Cart() {
    const [product, setProduct] = useRecoilState(Products);
    const [open, setOpen] = React.useState(false);

    //we had 2 index variable "i" for products map "index" for send index of products to modal , i useState to pass prams to parent.
    const [index, setIndex] = React.useState<number>(0);

    const increment = (i: number) => {
            const newArr = product.map((object,index) => {
            if (index === i ) {
              return {...object, count: product[i].count+1};
            }
            return object;
          });
        setProduct(newArr);
    };

    const decrement = (i: number) => {
        if (product[i].count === 1) {
            setOpen(true);
            setIndex(i);
        }else{
        const newArr = product.map((object,index) => {
            if (index === i ) {
              return {...object, count: product[i].count-1};
            }
            return object;
          });
        setProduct(newArr);
    }
    };

    const removeItem = (i: number) => {
       const newArr = product.filter((item)=>item!==product[i]);
       setProduct(newArr);
    };
    console.log(product);
    
    return (<div style={{ minHeight: "100vh" }}>
        {
        product.length === 0
            ?
            <h1 style={{textAlign:'center',fontSize:'3rem'}}>empty</h1>
            :
            product.map((item, i: any) => <div key={i}>
                <div style={{ display: 'flex', margin: 'auto', width: '95vw', justifyContent: 'space-between', alignItems: 'center' }} dir='rtl'>
                    <section style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ borderRadius: '1rem', overflow: 'hidden', width: '100px', position: 'relative', height: '100px', marginLeft: '0.7rem' }}><ImageWithFallback src={item.images[0]} layout='fill' alt={item.title} /></div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <a>{item.title}</a>
                            <div className={styles.flex}>adasdasd</div>
                            <Button className={styles.flex} sx={{ "&:hover": { color: 'red', background: 'transparent' } }} onClick={() => { setOpen(true); setIndex(i); }}><DeleteOutlineIcon /><p>حذف</p></Button>
                        </div>
                    </section>
                    <section className={styles.counter}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <span style={{ textDecoration: 'line-through', fontSize: "17px" }}>{item.price * (100 + item.id) / 100}</span>
                                <Box sx={{ backgroundColor: 'error.light', color: "#ffffff" }} className={styles.disCount}>
                                    <PercentSharpIcon sx={{ fontSize: "14px" }} />
                                    <span style={{ fontSize: '17px' }}>{item.id}</span>
                                </Box>
                            </div>
                            <div dir="rtl" style={{ textAlign: 'left' }}><span style={{ fontSize: "20px" }}>{item.price}</span><span>&ensp;تومان</span></div>
                        </div>
                        <div className={styles.flex} style={{ border: '2px solid white', borderRadius: '0.5rem' }}>
                            <div onClick={() => increment(i)} className={styles.flex} style={{ cursor: 'pointer', width: '2.5rem', height: '2.5rem', fontSize: '2.2rem' }}>+</div>
                            <div className={styles.flex} style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.5rem' }}>{product[i].count}</div>
                            <div onClick={() => decrement(i)} className={styles.flex} style={{ cursor: 'pointer', width: '2.5rem', height: '2.5rem' }}><div style={{ width: '33.33%', height: '0.175rem', backgroundColor: 'white' }} /></div>
                        </div>
                    </section>
                </div>
                <hr />
            </div>)}
        <Modal useOpen={[open, setOpen]} removeItem={() => removeItem(index)} />
    </div>);
}

export default Cart;