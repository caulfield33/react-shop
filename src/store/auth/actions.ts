import {AuthActionTypes, AuthData} from "./types";
import {IAuthCredential} from "../../models/IAuthCredential";

type Error = string;

export const loginRequest = (credential: IAuthCredential) => ({
    type: AuthActionTypes.LOGIN_REQUEST,
    payload: credential
});
export const loginSuccess = (data: AuthData) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: data
})
export const loginFailure = (data: Error[]) => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: data
})

export const logoutRequest = () => ({
    type: AuthActionTypes.LOGOUT_REQUEST,
})
export const logoutSuccess = () => ({
    type: AuthActionTypes.LOGOUT_SUCCESS,
})
export const logoutFailure = () => ({
    type: AuthActionTypes.LOGOUT_FAILURE,
    payload: null
})
