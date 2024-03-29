import styles from "./Useless.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Useless() {

    useEffect(() => {
        AOS.init({
            once:true,
            duration: 1000,
          }); //You can add options as per your need inside an object
       }, []);

    return (<div className={styles.container2}>
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "blue", borderRadius: "1rem", margin: "0.5rem" }} />
            <div style={{ fontSize: "1.4rem" }}>seen details</div>
        </div>
        <div>
            <div data-aos="fade-left" className={styles.div}><div>Lorem ipsum</div><div className={styles.div2}>dolor sit amet</div><div /></div>
            <div data-aos="fade-right" className={styles.div}><div>Lorem Aperiam,</div><div className={styles.div2}>officia autem aliquam laborum nihil dolorum odit corporis. Veritatis, aut.</div><div /></div>
            <div data-aos="fade-left" className={styles.div}><div>Doloremque,</div><div className={styles.div2}>dicta accusantium?</div><div /></div>
            <div data-aos="fade-right" className={styles.div}><div>adipisicing elit.</div><div className={styles.div2}>Doloremque?</div><div /></div>
            <div data-aos="fade-left" className={styles.div}><div>dicta</div><div className={styles.div2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente.</div></div>
            <div data-aos="fade-right" className={styles.div}><div>debitis repellat nobis quaerat minima necessitatibus ea!</div><div className={styles.div2}> Alias reiciendis possimus tempore impedit quas voluptatum, ut, fuga eligendi tenetur maxime, iusto ex doloremque consequatur!</div></div>
            <div data-aos="fade-left" className={styles.div}><div>lipsam</div><div className={styles.div2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente.</div></div>
            <div data-aos="fade-right" className={styles.div}><div>quaerat minima necessitatibus</div><div className={styles.div2}>fuga eligendi tenetur maxime, iusto ex doloremque consequatur!</div></div>
            <div data-aos="fade-left" className={styles.div}><div>adipisicing elit.</div><div className={styles.div2}>Doloremque?</div><div /></div>
        </div>
    </div>);
}

export default Useless;