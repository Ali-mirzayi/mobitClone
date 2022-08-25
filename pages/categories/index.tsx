import Link from "next/link";

function CategoryList({category}:any) {
    return ( <>
    <h1>Categories</h1>
    {category.map((item:any)=>(
        <div key={item.id} style={{width:"fit-content"}}>
            <Link href={`categories/${item.name}`} passHref><a>{item.name}</a></Link>
            <hr style={{borderWidth:".1px"}}/>
        </div>
    )
    )}
    </> );
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