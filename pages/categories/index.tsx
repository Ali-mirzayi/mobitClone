import Link from "next/link";
import styles from '../../styles/Categories/index.module.css';
import { useQuery } from 'react-query';
import SimpleSnackbar from "../../src/Hooks/ClipBoard";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CategoryList({category}:any) {
    const [open,setOpen] = useState(false);
    const Snackbar = () => {
        setOpen(true);
    }
    const { data } = useQuery(['AllProducts'] , () => fetcher("https://api.escuelajs.co/api/v1/products"))
    return ( <div style={{height:"100vh"}} >
    <h1>Categories</h1>
    {category.map((item:any)=>(
        <div key={item.id} style={{width:"fit-content"}}>
            <Link href={`/categories/${item.name}`} passHref><a>{item.name}</a></Link>
            <hr style={{borderWidth:".1px"}}/>
            <button onClick={Snackbar} ></button>
        </div>)
      )}
    <SimpleSnackbar text={'sam'} useOpen={[open,setOpen]} />
    </div> );
}

export default CategoryList;

export async function getStaticProps() {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories")
    const data = await response.json()

    return {
        props: {
            category: data.slice(0,5)
        }
    }
}