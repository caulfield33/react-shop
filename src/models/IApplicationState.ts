import {RouterState} from "connected-react-router";
import {AuthState} from "../store/auth/types";
import {MyStoreState} from "../store/myStore/types";
import {StoreState} from "../store/store/types";

export interface IApplicationState {
    router: RouterState
    auth: AuthState
    myStore: MyStoreState
    store: StoreState
}