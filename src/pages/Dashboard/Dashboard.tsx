import {useNavigate, useParams} from "react-router-dom";
import useAsyncEffect from "use-async-effect";
import {useGetUser} from "../../application/hooks";
import {TypeUser} from "../../infrastructure/types";
import {UserContext} from "../../application/context";
import {useState} from "react";
import {Form, UserCard} from "./components";
import {UserObject} from "../../domain/valueObject";
import 'rodal/lib/rodal.css';
import {ModalUserNotExists} from "../components/ui/modals";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [user, setUser] = useState<TypeUser>(UserObject);
    const [status, setStatus] = useState<string>("ready");
    const {get} = useGetUser();
    const navigate = useNavigate();
    const {username} = useParams();

    useAsyncEffect(async () => {
        if (!username) {
            setStatus("ready")
            setUser(UserObject)
            return;
        }
        setStatus("loading");

        const user: TypeUser | void = await get(username)
        .catch(() => {
            navigate("/");
            setModalVisible(true);
            setStatus("error")
        });

        if (user) {
            setUser(user);
            setStatus("success")
        }
    }, [username])

    return (
        <UserContext.Provider value={[user, setUser]}>
            <div id={styles.mainContent}>
                <Form state={[user, setUser, status, setStatus]}/>
                <UserCard/>
                <ModalUserNotExists state={[modalVisible, setModalVisible]}/>
            </div>
        </UserContext.Provider>
    )
}

export default Dashboard;