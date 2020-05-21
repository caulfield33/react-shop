import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import {AuthReducer} from "./auth/reducer";


const rootReducer = (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        auth: AuthReducer
    });

export default rootReducer;