import {RouterState} from "connected-react-router";
import {AuthState} from "../store/auth/types";
import {MyStoreState} from "../store/myStore/types";
import {StoreState} from "../store/store/types";
import {CartState} from "../store/cart/types";

export interface IApplicationState {
    router: RouterState
    auth: AuthState
    myStore: MyStoreState
    store: StoreState,
    cart: CartState
}