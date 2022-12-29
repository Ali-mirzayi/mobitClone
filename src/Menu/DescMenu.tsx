import React from 'react';
import styles from './DescMenu.module.css';
import { useState , useEffect } from 'react';
import Link from 'next/link';
import DropDown from './DropDown';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function DescMenu() {
    const [show,setShow] = useState(false);
    const [currentScrollPos, setCurrentScrollPos] = useState(0);
    const [prevScrollpos , setPrevScrollpos ] = useState(0);
    const [dropDown, setDropDown] = useState(false);
    const { data }:any = useQuery('categories',() => fetcher("https://api.escuelajs.co/api/v1/categories"));
    const categories = data?.slice(0,5);
    const router = useRouter();
    useEffect(() => {
        if (router.pathname.includes('/products/[id]')) {
            return;
        }
        window.addEventListener('scroll',
        () => (setCurrentScrollPos(window.scrollY),setPrevScrollpos( window.pageYOffset))
        )
        return () => {         
            if (prevScrollpos > currentScrollPos) {
                setShow(true);
              } else {
                setShow(false);
              }
              setPrevScrollpos(currentScrollPos) 
        }
    },[currentScrollPos,prevScrollpos])

    return ( <>
    <div className={show ? styles.container : styles.hide}>
            <ul className={styles.menu} >
                <li className={styles.menuItem} onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                    <Link href="/categories">Categories</Link>
                    {dropDown && <DropDown data={categories} />}    
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
    </> );
}

export default DescMenu;