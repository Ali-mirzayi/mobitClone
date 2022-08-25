import Link from "next/link";
import styles from "./Menu.module.css";
// import OutsideAlerter from "../src/Hooks/useOutsideAlerter"
import { useRef, useEffect } from "react"
// import Image from "next/image";
import { Divider } from "@mui/material";


type props = {
    setCloseMenu: any,
    closeMenu: any,
}

function OutsideAlerter(ref: any, pop: any) {
    const [closeMenu, setCloseMenu] = pop;
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setCloseMenu(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
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
                               <img style={{ height: "80px", width: "80px"}} src="/gta-home.png" alt="logo" />
                            </a>
                            <Divider sx={{ width: "200px" }} />
                        </div>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/categories">Categories</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="#">Offers</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products">Products</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>

    );
}

export default Menu;