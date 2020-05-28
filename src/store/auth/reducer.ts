import {Reducer} from "redux";
import {AuthActionTypes, AuthState} from "./types";

const storageUser = localStorage.getItem('react-test-app')

export const initialState: AuthState = {
    authData: storageUser ? JSON.parse(storageUser) : null,
    errors: [],
    loading: false
};

const reducer: Reducer<AuthState> = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.REFRESH_TOKEN_REQUEST:
        case AuthActionTypes.LOGOUT_REQUEST:
        case AuthActionTypes.LOGIN_REQUEST: {
            return {...state, loading: true};
        }
        case AuthActionTypes.REFRESH_TOKEN_FAILURE:
        case AuthActionTypes.LOGOUT_FAILURE:
        case AuthActionTypes.LOGIN_FAILURE: {
            return {...state, loading: false, errors: action.payload};
        }
        case AuthActionTypes.LOGOUT_SUCCESS:
        case AuthActionTypes.REFRESH_TOKEN_SUCCESS:
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {...state, loading: false, authData: action.payload};
        }

        case AuthActionTypes.ORDERS_UPDATE: {
            return {
                ...state, loading: false,
                authData: {
                    ...state.authData,
                    user: {
                        ...state.authData?.user,
                        orders: state.authData?.user.orders.concat(action.payload)
                    }
                }
            };
        }


        case AuthActionTypes.CLEAN_ERRORS: {
            return {...state, loading: false, errors: []};
        }
        default: {
            return state;
        }
    }
};

export {reducer as AuthReducer};
