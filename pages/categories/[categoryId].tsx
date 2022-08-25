import Image from "next/image";
import Link from "next/link";

function Category({ category }:any) {
    return ( <>
    <Link href={`/products/categories/${category.name}`}><a><h1>{category.name}</h1></a></Link>
    <Image src={category.image} width={200} height={200} alt=""/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit nostrum officiis sunt voluptate fugiat, dolores reprehenderit ut doloribus totam ex perferendis sapiente ipsa tempore repellat reiciendis aperiam amet? Hic.</p>
    {/* <Link href={`/products/categories/${category.name}`}><a>{category.name}</a></Link> */}
    </> );
}

export default Category;

export async function getStaticPaths(){
    return {
        paths: [
            {
                params: { categoryId: 'Clothes'}
            },
            {
                params: { categoryId: 'Electronics'}
            },
            {
                params: { categoryId: 'Furniture'}
            },
            {
                params: { categoryId: 'Shoes'}
            },
            {
                params: { categoryId: 'Others'}
            },
        ],
        fallback: false,
    }
}

export async function getStaticProps(context:any){
    const { params } = context;
        let id;
        switch(params.categoryId){
            case "Clothes":
                id=1;
                break;
            case "Electronics":
                id=2;
                break;
            case "Furniture":
                id=3;
                break;
            case "Shoes":
                id=4;
                break;
            case "Others":
                id=5;
                break;
        }
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
    const data = await response.json();
     return {
        props: {
            category: data,
        },
     }
}