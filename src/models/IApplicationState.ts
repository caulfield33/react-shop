import {RouterState} from "connected-react-router";
import {AuthState} from "../store/auth/types";

export interface IApplicationState {
    router: RouterState
    auth: AuthState
}