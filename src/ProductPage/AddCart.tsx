import PercentSharpIcon from '@mui/icons-material/PercentSharp';
import { Box, Button } from "@mui/material";
import styles from "./AddCart.module.css";
import { useRecoilState , useResetRecoilState} from 'recoil';
import { Products } from '../../Atoms';
import { useState,useEffect } from 'react';
import { some } from 'lodash';

function AddCart({ product }: any) {
    const [addProduct,setAddProduct] = useRecoilState(Products);
    const newProduct = {...product, count:1};
    const [active,setActive] = useState<string>(some(addProduct,newProduct) ? "حذف از سبد" : "افزودن به سبد خرید");
    const resetValue = useResetRecoilState(Products);

    useEffect(()=>{
            if(some(addProduct,newProduct)){
                     setActive("حذف از سبد");
                }
                 else{
                    setActive("افزودن به سبد خرید");
                }
        },[addProduct,product])
        console.log(addProduct);

    const Send = () => {
        if (addProduct[0].id === 0){
            setAddProduct([newProduct]);
            setActive("حذف از سبد");
        }
        else{
            setAddProduct((rest) => [...rest, newProduct]);
            setActive("حذف از سبد");
        }
        if (active === "حذف از سبد") {
            setAddProduct(addProduct.filter((item)=>item === newProduct));
            setActive("افزودن به سبد خرید");
        }
    }
    //take it to atom
    if(!addProduct[0]){
        resetValue();
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", backgroundColor:"grey.100" , position: "sticky", bottom: "0", zIndex: 4,padding:"10px 20px" }}>
            <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ backgroundColor: 'error.light',color:"#ffffff" }} className={styles.disCount}>
                        <PercentSharpIcon sx={{ fontSize: "14px" }} />
                        <span style={{ fontSize: '17px' }}>{product.id}</span>
                    </Box>
                    <span style={{ textDecoration: 'line-through', fontSize: "17px" }}>{product.price * (100 + product.id) / 100}</span>
                </div>
                <div dir="rtl"><span style={{ fontSize: "20px" }}>{product.price}</span><span>&ensp;تومان</span></div>
            </div>
            <div>
                <Button onClick={Send} sx={{backgroundColor:"#1d87da","&:hover":{backgroundColor:"#205e8e"},color:"#ffffff",borderRadius:"10px"}}><p style={{fontSize:"1.4rem",margin:"0"}}>{active}</p></Button>
            </div>
        </Box>
    );
}

export default AddCart;