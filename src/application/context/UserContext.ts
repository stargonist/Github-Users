import {createContext} from "react";
import {TypeUserContext} from "../../infrastructure/types";

export const UserContext = createContext<TypeUserContext>([]);