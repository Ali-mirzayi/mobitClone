import ImageWithFallback from "../../src/utils/ImageWithFallback";
import Link from "next/link";
import { useQuery } from 'react-query';
import styles from "../../styles/Categories/CategoryId.module.css";
import { Box } from '@mui/material';
import ProductBox from "../../src/utils/ProductBox";
import * as Scroll from 'react-scroll/modules';

let scrollSpy = Scroll.scrollSpy;


function Category({ category }: any) {
    const { data,isLoading } = useQuery(['GetProductsByCategory',category.id], () => fetcher(`https://api.escuelajs.co/api/v1/categories/${category.id}/products`));
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    if (isLoading ) return <div>Loading</div>;   

    return (<div style={{ minHeight: "100vh" }}>
        <div style={{ marginTop: "50px" }}>
                <div>
                    <Link href={`/products/categories/${category.name}`}><a><h1>{category.name}</h1></a></Link>
                    <ImageWithFallback src={category.image} width={200} height={200} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit nostrum officiis sunt voluptate fugiat, dolores reprehenderit ut doloribus totam ex perferendis sapiente ipsa tempore repellat reiciendis aperiam amet? Hic.</p>
                    <div className={styles.productCategory}>
                        {data.map((item: any) => (
                            <Box key={item.id} dir='rtl'>
                               <ProductBox item={item} />
                            </Box>
                        ))}
                    </div>
                </div>
        </div>
    </div>);
}

export default Category;

export async function getStaticPaths() {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    const data = await response.json();
    const paths = data.map((item: any) => {
        return {
            params: {
                categoryId: `${item.name}`
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: any) {
    const { params } = context;
   
    const response2 = await fetch('https://api.escuelajs.co/api/v1/categories');
    const data2 = await response2.json();
    const catId = data2.find(({name}:any)=>name==params.categoryId);

    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${catId.id}`);
    const data = await response.json();

    return {
        props: {
            category: data,
        },
    }
}