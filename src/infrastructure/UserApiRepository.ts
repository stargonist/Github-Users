import axios from "axios";
import {GetUserPromise, TypeUser} from "./types";

const Api = import.meta.env.VITE_BASE_API_URL;

export class UserApiRepository {
    get: GetUserPromise = async (username: string) => {
        const {data} = await axios.get<TypeUser>(Api + username);
        return data;
    }
}