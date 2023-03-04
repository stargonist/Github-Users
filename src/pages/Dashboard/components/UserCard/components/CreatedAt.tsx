import {TypeUser} from "../../../../../infrastructure/types";

export const CreateAt = ({user}: { user: TypeUser }) => {
    let fullCreateTime: string = "";

    if (user.created_at) {
        const createdAt = user.created_at;
        const datetime = createdAt.split("T")[0]
        const time = createdAt.split("T")[1].replace("Z", "");
        const datetimeOffBar = datetime.split("-").join("/");
        fullCreateTime = datetimeOffBar + " - " + time;
    }

    return (
        <div>
            <strong> Create at: </strong>
            <span> {fullCreateTime} </span>
        </div>
    )
}