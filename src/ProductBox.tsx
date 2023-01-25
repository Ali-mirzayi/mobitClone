import styles from "./ProductBox.module.css";
import { Box, Paper } from '@mui/material';
import Link from "next/link";
import ImageWithFallback from './ImageWithFallback';
import PercentSharpIcon from '@mui/icons-material/PercentSharp';
function ProductBox({ item }: any) {
    return (
        <Paper elevation={3} className={styles.paper}>
            <div style={{ visibility: 'visible' }}>
                <div className={styles.discountContainer}>
                    <Box sx={{ backgroundColor: 'error.light' }} className={styles.discount}>
                        <span style={{ fontSize: '30px' }}>{item.id}</span>
                        <PercentSharpIcon />
                    </Box>
                    <div style={{ width: '30px', height: '30px' }} />
                </div>
                <Link href={`/products/${item.id}`} passHref>
                    <div className={styles.imageContainer}>
                        <ImageWithFallback src={item.images[0]} fill alt="" className={styles.image} />
                    </div>
                </Link>
                <p style={{ marginRight: '20px' }}>{item.title}</p>
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <span style={{ margin: '0 20px' }}>قیمت:{item.price}</span>
                    <span style={{ textDecoration: 'line-through' }}>{item.price * (100 + item.id) / 100}</span>
                </div>
            </div>
        </Paper>
    );
}

export default ProductBox;