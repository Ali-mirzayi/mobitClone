import Head from 'next/head';
import Link from "next/link";
import { useQuery } from 'react-query';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CategoryList({category}:any) {
    const { data } = useQuery('categories' , () => fetcher("https://api.escuelajs.co/api/v1/categories"));
    const categories = data?.slice(0,5);
    
    return ( <div style={{width:"90vw",margin:"150px auto"}}>
    <Head>
        <title>Categories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="its my mobit clone" />
        <link rel="icon" href="/gta-home-logo.jpg" />
    </Head>
    <h1 style={{fontSize:"40px"}}>Categories</h1>
    {categories?.map((item:any)=>(
        <div key={item.id} style={{width:"fit-content",fontSize:"25px"}}>
            <Link href={`/categories/${item.name}`} passHref><a>{item.name}</a></Link>
            <hr style={{borderWidth:".1px"}}/>
        </div>)
      )}
    </div> );
}

export default CategoryList;

export async function getStaticProps() {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories")
    const data = await response.json()

    return {
        props: {
            category: data
        }
    }
}