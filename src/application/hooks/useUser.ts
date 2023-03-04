import {useContext} from "react";
import {UserContext} from "../context";
import {TypeUserContext} from "../../infrastructure/types";

export default () => useContext<TypeUserContext>(UserContext);