import { Paper, Link as LinkMui } from "@mui/material";
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import styles from '../../styles/Footer/Back.module.css'
import Image from "next/image";

const data = [{ "image": "https://www.mobit.ir/_nuxt/img/fastSend.57a5d18.svg", "label": "ارسال سریع کالا" }, { "image": "https://www.mobit.ir/_nuxt/img/productReturn.dea9b58.svg", "label": "مهلت ۷ روز بازگشت کالا" }, { "image": "https://www.mobit.ir/_nuxt/img/phoneSupport.14858ff.svg", "label": "پشتیبانی تلفنی" }, { "image": "https://www.mobit.ir/_nuxt/img/productGuaranty.e7f72bd.svg", "label": "تضمین اصالت کالا" }]

function Back() {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (<section dir="rtl" style={{ position: 'relative', marginTop: '20px' }}>
        <Paper elevation={0} className={styles.paper} onClick={topFunction}><div><p className={styles.goUp}>بازگشت به بالا</p><KeyboardArrowUpSharpIcon sx={{ fontSize: '35px' }} /></div></Paper>
        <Paper className={styles.paperContainer}>
            <div className={styles.flex}>
                <div>
                    <h5 style={{ fontSize: '25px', margin: '10px auto 0' }}>پشتیبانی</h5>
                    <p className={styles.services}>شماره تماس : &ensp; <LinkMui underline="hover" sx={{ fontSize: '25px' }} href="tel:+989306228478">09306228478</LinkMui></p>
                    <p className={styles.services}> ایمیل: &ensp; <LinkMui underline="hover" sx={{ fontSize: '25px' }} href="mailto:alimirzaei7997@gmail.com">alimirzaei7997@gmail.com</LinkMui></p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {data.map((image, i) => (<div style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }} key={i}><Image src={image.image} width={64} height={64} alt="" className={styles.image} /><p>{image.label}</p></div>))}
                </div>
            </div>
            <div className={styles.grid}>
                    {data.map((image, i) => (<div style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }} key={i}><Image src={image.image} width={64} height={64} alt="" className={styles.image} /><p>{image.label}</p></div>))}
            </div>
        </Paper>
    </section>);
}

export default Back;