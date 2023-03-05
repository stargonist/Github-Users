import {Link} from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../../assets/codenet-team.png"

export const Footer = () => {
    const stargonistWeb = "https://stargonist.netlify.app/"

    return (
        <footer id={styles.footer}>
            <Link target="_blank" id={styles.logo} to={stargonistWeb}>
                <img src={logo} alt="Stargonist Logo"/>
                <strong> Stargonist Team </strong>
            </Link>
        </footer>
    )
}