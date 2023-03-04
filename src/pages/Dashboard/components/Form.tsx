import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import styles from "./styles/Form.module.css";

export const Form = ({state}: { state: any[] }) => {
    const [user, setUser, status, setStatus] = state;
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        const username = data.username;
        navigate("/" + username);
    };

    const btnResetHandleClick = () => {
        return navigate("/");
    }

    const borderColor = () => {
        switch (status) {
            case "loading": return { borderLeftColor: "var(--main_color)" }
            case "success": return { borderLeftColor: "var(--success-color)" }
            case "error": return { borderLeftColor: "var(--error-color)" }
        }
    }


    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h3> Find a user </h3>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={user.login && "Latest: @" + user.login || "username"}
                    {...register("username", {required: true, value: user.login})}
                />
                <input
                    className={styles.buttonDefault}
                    id={styles.buttonFind}
                    type="submit"
                    value="Find"
                />
                <input
                    className={styles.buttonDefault}
                    id={styles.buttonReset}
                    type="reset"
                    onClick={btnResetHandleClick}
                    value="Reset"
                />
                <div id={styles.status} style={borderColor()}>
                    <strong> Status: </strong>
                    <span> {status} </span>
                </div>
            </form>
        </>
    );
}