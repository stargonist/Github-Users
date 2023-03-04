import useUser from "../../../application/hooks/useUser";
import {TypeUser} from "../../../infrastructure/types";
import {Link} from "react-router-dom";
import styles from "./styles/UserCard.module.css";

export const UserCard = () => {
    const user: TypeUser = useUser()[0];

    if (!user.login) return <NotUserFound/>;
    return (
        <div id={styles.userCard}>
            <div id={styles.headerCard}>
                <img src={user?.avatar_url} alt={user?.name + "Photo"}/>

                <div id={styles.name}>
                    <strong> {user?.name} </strong>
                </div>
                <div id={styles.username}>
                    <strong> @{user?.login} </strong>
                </div>
            </div>

            <div id={styles.bodyCard}>
                <div>
                    <strong> ID: </strong>
                    <span> {user?.id} </span>
                </div>
                <div>
                    <strong> Bio: </strong>
                    <span> {user?.bio} </span>
                </div>
                <div>
                    <strong> Email: </strong>
                    <span> {user?.email} </span>
                </div>
                <div>
                    <strong> Public Repositories: </strong>
                    <span> {user?.public_repos} </span>
                </div>
                <div>
                    <strong> Blog: </strong>
                    <span> {user?.blog} </span>
                </div>
                <div>
                    <strong> Followers: </strong>
                    <span> {user?.followers} </span>
                </div>
                <div>
                    <strong> Following: </strong>
                    <span> {user?.following} </span>
                </div>
                <div>
                    <strong> Twitter: </strong>
                    <Link
                        target="_blank"
                        to={"https://twitter.com/" + user?.twitter_username}
                        children={<> {user?.twitter_username} </>}
                    />
                </div>
                <div>
                    <strong> Account type: </strong>
                    <span> {user?.type} </span>
                </div>
                <div>
                    <strong> Company: </strong>
                    <span> {user?.company} </span>
                </div>
                <div>
                    <CreateAt user={user}/>
                </div>
            </div>
        </div>
    )
}

const CreateAt = ({user}: { user: TypeUser }) => {
    let fullCreateTime: string = "";

    if (user.created_at) {
        const createdAt = user.created_at;
        const datetime = createdAt.split("T")[0]
        const time = createdAt.split("T")[1].replace("Z", "");
        const datetimeOffBar = datetime.split("-").join("/");
        fullCreateTime = datetimeOffBar + " - " + time;
    }

    return (
        <>
            <strong> Create at: </strong>
            <span> {fullCreateTime} </span>
        </>
    )
}

const NotUserFound = () => {
    return <h2> Try find a user </h2>
}