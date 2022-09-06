
import Link from "next/link";
import ImageWithFallback from "../../../src/utils/ImageWithFallback";

function Category({ category }:any) {
    
    return ( <div style={{height:"100vh"}}>
    <h1 style={{textAlign:"center",fontSize:"2.5rem" , margin:"5px"}}>{category[0].category.name}</h1>
    
    {category.map((item:any)=>(<div key={item.id} style={{ display:"flex" , margin:"20px" , justifyContent:"space-around", alignItems:"center"}}>
        <Link href={`/products/${item.id}`} passHref>
        <a>
        <h2>{item.title}</h2>
        <h4>{item.price}</h4>
        </a>
        </Link>
        <div style={{width:"120px",height:"100px"}}>
        <ImageWithFallback src={item.images[0]} width="150px" height="120px" alt=""/>
        </div>
        </div>))}
   </div>
   );
}

export default Category;

export async function getStaticPaths(){
    return {
        paths: [
            {
                params: { categories: 'Clothes'}
            },
            {
                params: { categories: 'Electronics'}
            },
            {
                params: { categories: 'Furniture'}
            },
            {
                params: { categories: 'Shoes'}
            },
            {
                params: { categories: 'Others'}
            },
        ],
        fallback: false,
    }
}

export async function getStaticProps(context:any){
    const { params } = context;
    
        let id;
        switch(params.categories){
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
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    const data = await response.json();
    console.log(data);
    
     return {
        props: {
            category: data,
        },
     }
}