import { CircularProgress,Typography,Box } from "@mui/material";
import Image from "next/image";
import useSWR from 'swr';
import styles from '../../styles/Category.module.css';

const SetName = ({ item }:any) => {
    let name = ""
    switch (item.name) {
        case "Clothes":
            name = "لباس";
            break;
        case "Electronics":
            name = "ساعت";
            break;
        case "Clothes":
            name = "لباس";
            break;
        case "Furniture":
            name = "صندلی و مبل";
            break;
        case "Shoes":
            name = " کفش ";
            break;
        case "Others":
            name = " متفرقه ";
            break;
        case "Groceries":
            name = " خواروبار ";
            break;
        default:
            name = "please try with vpn";
    }
    return (<Typography sx={{ textAlign: "center",margin:0}}>{name}</Typography>)
}
function Category() {
    type Arguments = { id: number, name: string, image: string }
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('https://api.escuelajs.co/api/v1/categories', fetcher)

    if (error) return <div>an error has occured.</div>;
    if (!data) return <div style={{ display: "flex", width: "100vw", height: "40vw", justifyContent: "center", alignItems: 'center' }} ><CircularProgress size="5em" /></div>;
    //sometime this api create special item6 and sometime this item will make errors including filtering in iran
    data.splice(5);
    
    return (<><section>
        <Box className={styles.scrollmenu} sx={{'&::-webkit-scrollbar':{backgroundColor:'grey.500'},'&::-webkit-scrollbar-thumb':{backgroundColor: 'grey.400'}}} dir="rtl">
             {data.map((item:Arguments)=> ( 
                <a href='#' key={item.id} className={styles.container}>
                    <Image src={item.image} width="120%" height="80%" alt="" className={styles.img} />
                    <SetName item={item} />
                </a>
            ))}
        </Box>
    </section></>);
}

export default Category;