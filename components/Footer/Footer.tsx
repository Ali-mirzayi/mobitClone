import Back from "./Back";
import styles from "../../styles/Footer/Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Footer() {
    return (
        <footer>
            <Back />
            <section className={styles.footer}>
                <h4 className={styles.dev}>© 2022 Ali Mirzaei</h4>
                <div>
                    <Link href="https://github.com/Ali-mirzayi/mobitClone">
                        <h3 className={styles.link}>
                            <GitHubIcon />
                        </h3>
                    </Link>
                    <Link href="https://www.linkedin.com/in/alimirzaeizade">
                        <h3 className={styles.link}>
                            <LinkedInIcon />
                        </h3>
                    </Link>
                    <Link href="mailto:alimirzaei7997@gmail.com">
                        <h3 className={styles.link}>
                            <MailOutlineIcon />
                        </h3>
                    </Link>
                    <Link href="https://www.instagram.com/aliimirzaeizade/?igshid=YmMyMTA2M2Y%3D">
                        <h3 className={styles.link}>
                            <InstagramIcon />
                        </h3>
                    </Link>
                </div>
            </section>
        </footer>);
}

export default Footer;