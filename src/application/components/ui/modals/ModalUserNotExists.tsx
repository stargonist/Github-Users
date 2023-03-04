import Rodal from "rodal";

export const ModalUserNotExists = ({state}: { state: any[] }) => {
    const [modalVisible, setModalVisible] = state;
    return (
        <Rodal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            children={<h2> This user not exists :( </h2>}
            customStyles={modalStyles}
        />
    )
}

const modalStyles = {
    width: "300px",
    height: "150px",
    display: "grid",
    placeItems: "center",
    borderRadius: "15px",
    backgroundColor: "#202020"
}