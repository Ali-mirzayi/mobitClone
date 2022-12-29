import styles from "./SubNav.module.css";
import { Box } from "@mui/material";
import { useState , useEffect } from 'react';
import { Link } from 'react-scroll';

const SubNav = () => {
    const [show,setShow] = useState(false);
 
    return (
            <Box className={show ? styles.container : styles.hide} sx={{ backgroundColor: "grey.500" }}>
                <Link to="nav" spy={true}  onSetActive={()=>setShow(true)} onSetInactive={()=>setShow(false)} offset={-150} />
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link activeClass={styles.active} to="one" spy={true} smooth={true} offset={-150} duration={100}>About</Link>
                    </li>
                    <li className={styles.li}>
                        <Link activeClass={styles.active} to="two" spy={true} smooth={true} offset={-140} duration={100}>Details</Link>
                    </li>
                    <li className={styles.li}>
                        <Link activeClass={styles.active} to="three" spy={true} smooth={true} offset={-200} duration={100}>Similar</Link>
                    </li>
                </ul>
            </Box>
    )
}

export default SubNav;