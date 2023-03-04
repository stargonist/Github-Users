import logo from "../../../assets/github.png"
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
            <header className={styles.header}>
                <nav>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Github logo"/>
                        <h2> Github Users </h2>
                    </Link>
                </nav>
            </header>
    );
}