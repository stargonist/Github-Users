import Rodal from "rodal";
import styles from "./Modals.module.css";

export const ModalError = ({state}: { state: any[] }) => {
    const [modalVisible, setModalVisible] = state;

    return (
        <Rodal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            children={<Msg />}
            customStyles={modalStyles}
        />
    )
}

const Msg = () => {
    return (
        <div id={styles.msgError}>
            <h2> Ups! </h2>
            <h3> User not exists <span style={{color: "var(--error-color)"}}>or</span> Connection error </h3>
        </div>
    )
}

const modalStyles = {
    width: "350px",
    height: "120px",
    display: "grid",
    placeItems: "center",
    borderRadius: "15px",
    backgroundColor: "#202020"
}