import {TypeUser} from "../../../../../infrastructure/types";
import styles from "../../styles/UserCard.module.css";

export const HeaderCard = ({user}: { user: TypeUser }) => {
    return (
        <div id={styles.headerCard}>
            <img src={user?.avatar_url} alt={user?.name + "Photo"}/>

            <div id={styles.name}>
                <strong> {user?.name} </strong>
            </div>
            <div id={styles.username}>
                <strong> @{user?.login} </strong>
            </div>
        </div>
    )
}