import Link from "next/link";

function ProductsList({category}:any) {
    return ( <>
    <h1>All Products</h1>
    {category.map((item:any)=>(
        <div key={item.id} style={{width:"fit-content"}}>
            <Link href={`products/${item.id}`} passHref><a>{item.title}</a></Link>
            <hr style={{borderWidth:".1px"}}/>
        </div>
    )
    )}
    </> );
}

export default ProductsList;

export async function getStaticProps() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products")
    const data = await response.json()

    return {
        props: {
            category: data
        }
    }
}