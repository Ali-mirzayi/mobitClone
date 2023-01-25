import Link from "next/link";
import { useState } from "react";
import styles from './DropDown.module.css';

// this categories dropdown

function DropDown({data}:any) {
    const [dropDown, setDropDown] = useState(false);
       
    return (<>
        <ul className={dropDown ? styles.inactive : styles.active}>
            {data?.map((i:any) => (
                <li key={i.id} className={styles.item} onClick={() => setDropDown(false)}><Link href={`/categories/${i.name}`}>{i.name}</Link></li>
            ))}
        </ul>
    </>);
}

export default DropDown;