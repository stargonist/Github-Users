import {TypeUser} from "../../../../../infrastructure/types";
import styles from "../../styles/UserCard.module.css";
import {Link} from "react-router-dom";
import {CreateAt} from "./CreatedAt";

export const BodyCard = ({user}: { user: TypeUser }) => {
    return (
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
                <Link target="_blank" to={user.blog || ""} children={<> {user?.blog} </>}/>
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
                <Link target="_blank" to={"https://twitter.com/" + user?.twitter_username}
                      children={<> {user?.twitter_username} </>}/>
            </div>
            <div>
                <strong> Account type: </strong>
                <span> {user?.type} </span>
            </div>
            <div>
                <strong> Company: </strong>
                <span> {user?.company} </span>
            </div>

            <CreateAt user={user}/>
        </div>
    )
}