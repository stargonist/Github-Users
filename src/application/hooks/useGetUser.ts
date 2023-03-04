import {UserApiRepository} from "../../infrastructure/UserApiRepository";

const repository = new UserApiRepository();

export const useGetUser = () => {
    const get = async (username: string) => {
        return await repository.get(username);
    }

    return {get}
};