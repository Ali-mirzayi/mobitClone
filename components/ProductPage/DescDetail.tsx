import Link from "next/link";
import { useEffect } from "react";
import Divider from "@mui/material/Divider";
import CheckIcon from '@mui/icons-material/Check';
import styles from "./Detail.module.css";

export default function DescDetail(props: any) {
    const { product, color, setColor, rating, setRating, colors } = props;
    useEffect(() => {
        setRating(() => Math.floor(Math.random() * (40) + 10) / 10);
    }, []);

    return (
        <div style={{margin:"10px 70px",fontSize:"25px"}}>
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
                <span style={{ fontSize: "30px", margin: "5px" }}>{color}</span>
            </div>
            {/* color picker */}
            <div style={{ display: "flex", margin: "auto", width: "fit-content" }}>
                {colors.map((c: any, i: number) => {
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
        </div>
    )
}
