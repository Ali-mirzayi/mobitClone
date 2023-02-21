import Head from "next/head";
import styles from "../styles/Offers/Promotion.module.css";
import { useState, useEffect } from 'react';
import SellIcon from '@mui/icons-material/Sell';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import StarIcon from '@mui/icons-material/Star';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { useQuery } from 'react-query';
import ProductBox from "../src/ProductBox";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Promotion from "../components/Promotion/Promotion";
import axios from "axios";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

function Offers({ products }: any) {
    const { data } = useQuery(['AllProducts'], () => fetcher("https://api.escuelajs.co/api/v1/products"))
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = useState<string>("تمام محصولات");
    const [warn, setwarn] = useState(products);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const AllCategory = () => {
        setwarn(data);
        setAnchorEl(null);
        setSelected("تمام محصولات")
    }

    const Clothes = () => {
        setwarn(data.filter((i: any) => i.category.name === "Clothes"));
        setAnchorEl(null);
        setSelected("لباس")
    }

    const Shoes = () => {
        setwarn(data.filter((i: any) => i.category.name === "Shoes"));
        setAnchorEl(null);
        setSelected("کفش")
    }

    const Electronics = () => {
        setwarn(data.filter((i: any) => i.category.name === "Electronics"));
        setAnchorEl(null);
        setSelected("ساعت")
    }

    const Furniture = () => {
        setwarn(data.filter((i: any) => i.category.name === "Furniture"));
        setAnchorEl(null);
        setSelected("خانگی")
    }

    const Others = () => {
        setwarn(data.filter((i: any) => i.category.name === "Others"));
        setAnchorEl(null);
        setSelected("غیره")
    }

    return (<>
        <div className={styles.container}>
            <Head>
                <title>discount</title>
                <link rel="icon" href="/gta-home-logo.jpg" />
                <meta name="description" content="Generated by create next app" />
                <meta name="description" content="its my mobit clone" />
            </Head>
            <section className={styles.counter}>
                <Promotion />
                <MoneyOffIcon className={styles.icon} sx={{ fontSize: "50px", rotate: "15deg", top: "190px", right: "10vw" }} />
                <StarIcon className={styles.icon} sx={{ fontSize: "50px", rotate: "10deg", top: "30px", right: "55vw" }} />
                <MoneyOffIcon className={styles.icon} sx={{ fontSize: "30px", rotate: "-10deg", top: "20px", right: "20vw" }} />
                <SellIcon className={styles.icon} sx={{ fontSize: "40px", top: "118px", right: "9vw" }} />
                <MoneyOffIcon className={styles.icon} sx={{ fontSize: "40px", rotate: "-15deg", top: "118px", right: "82vw" }} />
                <StarIcon className={styles.icon} sx={{ fontSize: "30px", rotate: "40deg", top: "190px", right: "40vw" }} />
                <CurrencyBitcoinIcon className={styles.icon} sx={{ fontSize: "37px", rotate: "-20deg", top: "205px", right: "70vw" }} />
            </section>
            <div>
                <div>
                    <div style={{ display: "flex", alignItems: "center", margin: "20px 40px", direction: "rtl" }}>
                        <span>انتخاب</span>
                        <Button
                            id="btn"
                            aria-controls={open ? 'menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ padding: '0 10px', fontSize: '20px', backgroundColor: "info.main", "&:hover": { backgroundColor: "grey.900" }, color: "white", margin: "10px" }}
                        >
                            {selected}
                        </Button>
                    </div>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'btn',
                        }}
                    >
                        <MenuItem onClick={AllCategory}>تمام محصولات</MenuItem>
                        <MenuItem onClick={Clothes}>لباس</MenuItem>
                        <MenuItem onClick={Shoes}>کفش</MenuItem>
                        <MenuItem onClick={Electronics}>ساعت</MenuItem>
                        <MenuItem onClick={Furniture}>خانگی</MenuItem>
                        <MenuItem onClick={Others}>غیره</MenuItem>
                    </Menu>
                </div>
            </div>
            <div className={styles.productCategory}>
                {warn?.map((item: any) => (
                    <div key={item.id} dir='rtl'>
                        <ProductBox item={item} />
                    </div>
                ))}
            </div>
        </div>
    </>);
}

export default Offers;

export async function getServerSideProps(context: any) {
    const  host  = context.req.headers.host;
    const response = await axios.get(`http://${host}/api/products`);

    return {
        props: {
            products: response.data
        }
    }
}