import {Link} from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../../assets/codenet-team.png"

export const Footer = () => {
    return (
        <footer id={styles.footer}>
            <Logo />
        </footer>
    )
}

const Logo = () => {
    const codenetTeamPage = import.meta.env.VITE_CODENET_TEAM_PAGE;
    return (
        <Link target="_blank" id={styles.logo} to={codenetTeamPage}>
            <img src={logo} alt="Codenet Team Logo"/>
            <strong> Codenet Team </strong>
        </Link>
    )
}