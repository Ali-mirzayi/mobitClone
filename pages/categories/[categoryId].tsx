import Head from 'next/head';
import styles from "../../styles/Categories/CategoryId.module.css";
import ImageWithFallback from "../../src/ImageWithFallback";
import ProductBox from "../../src/ProductBox";
import axios from 'axios';

function Category({ category }: any) {
    return (
        <div style={{ marginTop: "50px" }}>
            <Head>
                <title>{category ? category[0].category.name : 'undefined'}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="description" content="its my mobit clone" />
                <link rel="icon" href="/gta-home-logo.jpg" />
            </Head>
            <div>
                {category ?
                    <div>
                        <div style={{ margin: "auto", width: "fit-content" }}>
                            <h1 className={styles.label}>{category?.name}</h1>
                            <div style={{ position: "relative", width: "90vw", height: "60vw", borderRadius: "10px", overflow: "hidden" }}>
                                <ImageWithFallback fill priority src={category?.image} alt={category?.name} />
                            </div>
                        </div>
                        <p style={{ width: "70vw", margin: "20px auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit nostrum officiis sunt voluptate fugiat, dolores reprehenderit ut doloribus totam ex perferendis sapiente ipsa tempore repellat reiciendis aperiam amet? Hic.</p>
                        <div className={styles.productCategory}>
                            {category?.map((item: any) => (
                                <div key={item.id} dir='rtl'>
                                    <ProductBox item={item} />
                                </div>
                            ))}
                        </div>
                    </div> :
                    <div>wait...</div>}
            </div>
        </div>
    );
}

export default Category;

export async function getServerSideProps(context: any) {
    const { params } = context;

    let id;
    switch (params.categoryId) {
        case "Clothes":
            id = 1;
            break;
        case "Electronics":
            id = 2;
            break;
        case "Furniture":
            id = 3;
            break;
        case "Shoes":
            id = 4;
            break;
        case "Others":
            id = 5;
            break;
    }
    const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)

    return {
        props: {
            category: response.data,
        },
    }
}