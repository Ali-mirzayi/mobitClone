import Link from "next/link";
import styles from "../../styles/Products/Products.module.css"

function ProductsList({ category }: any) {

    return (<div style={{ height: "100vh" }}>
        <h1>All Products</h1>
        {category?.map((item: any) => (
            <div key={item.id} style={{ width: "fit-content" }}>
                <Link href={`products/${item.id}`} passHref><a>{item.title}</a></Link>
                <hr style={{ borderWidth: ".1px" }} />
            </div>
        )
        )}
    </div>);
}

export default ProductsList;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
    const response = await fetcher("https://api.escuelajs.co/api/v1/products")

    return {
        props: {
            category: response
        }
    }
}