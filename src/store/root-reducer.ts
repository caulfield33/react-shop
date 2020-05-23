import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import {AuthReducer} from "./auth/reducer";
import {StoreReducer} from "./store/reducer";
import {myStoreReducer} from "./myStore/reducer";
import {CartReducer} from "./cart/reducer";


const rootReducer = (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        auth: AuthReducer,
        myStore: myStoreReducer,
        store: StoreReducer,
        cart: CartReducer,
    });

export default rootReducer;