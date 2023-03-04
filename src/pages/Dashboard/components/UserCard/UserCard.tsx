import useUser from "../../../../application/hooks/useUser";
import {TypeUser} from "../../../../infrastructure/types";
import styles from "../styles/UserCard.module.css";
import {BodyCard, HeaderCard} from "./components";

export const UserCard = () => {
    const user: TypeUser = useUser()[0];

    if (!user.login) return <NotUserFound/>;
    return (
        <div id={styles.userCard}>
            <HeaderCard user={user}/>
            <BodyCard user={user}/>
        </div>
    )
}

const NotUserFound = () => {
    return <h2> Try find a user </h2>
}