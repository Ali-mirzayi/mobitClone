
import Link from "next/link";
import ImageWithFallback from "../../../src/utils/ImageWithFallback";

function Category({ category }:any) {

    console.log(category);
    
    
    return ( <div style={{height:"100vh"}}>
    <h1 style={{textAlign:"center",fontSize:"2.5rem" , margin:"5px"}}>{category[0].category.name}</h1>
    
    {category?.map((item:any)=>(<div key={item.id} style={{ display:"flex" , margin:"20px" , justifyContent:"space-around", alignItems:"center"}}>
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


export async function getStaticPaths({categoriesData}:any){
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    const data = await response.json();
    const paths = data.map((item: any) => {
        return {
            params: {
                categories: `${item.name}`
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context:any){
    const { params } = context;

    const response2 = await fetch('https://api.escuelajs.co/api/v1/categories');
    const data2 = await response2.json();
    const catId = data2.find(({name}:any)=>name==params.categories);

    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${catId.id}/products`);
    const data = await response.json();

     return {
        props: {
            category: data,
        },
     }
}