import {Link} from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../../assets/codenet-team.png"

export const Footer = () => {
    const codenetTeamPage = import.meta.env.VITE_CODENET_TEAM_PAGE;

    return (
        <footer id={styles.footer}>
            <Link target="_blank" id={styles.logo} to={codenetTeamPage}>
                <img src={logo} alt="Codenet Team Logo"/>
                <strong> Codenet Team </strong>
            </Link>
        </footer>
    )
}