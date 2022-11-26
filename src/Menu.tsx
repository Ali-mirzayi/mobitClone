import Link from "next/link";
import styles from "./Menu.module.css";
import { useRef, useEffect } from "react";
import { Divider } from "@mui/material";
import Image from "next/image";


type props = {
    setCloseMenu: any,
    closeMenu: any,
}

function OutsideAlerter(ref: any, pop: any) {
    const [closeMenu, setCloseMenu] = pop;
    useEffect(() => {
      
    //   Alert if clicked on outside of element
         
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setCloseMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setCloseMenu]);
}

function Menu({ pop }: any) {
    const [closeMenu, setCloseMenu] = pop;
    const catMenu = useRef(null);
    OutsideAlerter(catMenu, pop)

    return (
        <div ref={catMenu}>
            <ul className={styles.menu} style={closeMenu === true ? { right: "0" } : {}}>
                <li className={styles.menuItem} style={{marginBottom:"30px"}}>
                    <Link href="/" passHref>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <a>
                               <Image width={80} height={80} src="/gta-home.png" alt="logo" />
                            </a>
                            <Divider sx={{ width: "200px" }} />
                        </div>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/categories">Categories</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/promotion">Promotion</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products">Products</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact-us">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;