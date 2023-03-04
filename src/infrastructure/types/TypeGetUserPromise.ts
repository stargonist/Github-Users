import {TypeUser} from "./";

export type GetUserPromise = (username: string) => Promise<TypeUser>;