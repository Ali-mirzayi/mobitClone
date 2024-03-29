import Head from 'next/head';
import Link from "next/link";
import styles from "../../styles/Products/Products.module.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

function ProductsList({ products }: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selected, setSelected] = React.useState<string>("ترتیب");
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const expensive = () => {
        products.sort((a: any, b: any) => b.price - a.price)
        setSelected("گران ترین")
        setAnchorEl(null);
    }

    const cheapest = () => {
        products.sort((a: any, b: any) => a.price - b.price)
        setSelected("ارزان ترین")
        setAnchorEl(null);
    }

    const newest = () => {
        products.sort((a: any, b: any) => b.id - a.id)
        setSelected("جدید ترین")
        setAnchorEl(null);
    }

    const oldest = () => {
        products.sort((a: any, b: any) => a.id - b.id)
        setSelected("قدیمی ترین")
        setAnchorEl(null);
    }

    return (<div>
        <Head>
            <title>All Products</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="description" content="its my mobit clone" />
            <link rel="icon" href="/gta-home-logo.jpg" />
        </Head>
        <div className={styles.container}>
            <h1>All Products</h1>
            <div>
                <Button
                    id="btn"
                    aria-controls={open ? 'menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ padding: '0 10px', fontSize: '20px' }}
                >
                    {selected}
                </Button>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'btn',
                    }}
                >
                    <MenuItem onClick={expensive}>گران ترین</MenuItem>
                    <MenuItem onClick={cheapest}>ارزان ترین</MenuItem>
                    <MenuItem onClick={newest}>جدید ترین</MenuItem>
                    <MenuItem onClick={oldest}>قدیمی ترین</MenuItem>
                </Menu>
            </div>
        </div>
        {products?.map((item: any) => (
            <div key={item.id} style={{ width: "90vw", margin: "auto" }}>
                <div className={styles.item}>
                    <Link href={`products/${item.id}`} passHref>{item.title}</Link>
                    <Link href={`products/${item.id}`} passHref>{item.price}</Link>
                </div>
                <hr style={{ borderWidth: "0.1px" }} />
            </div>
        )
        )}
    </div>);
}

export default ProductsList;

export async function getServerSideProps() {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products")

    return {
        props: {
            products: response.data
        }
    }
}