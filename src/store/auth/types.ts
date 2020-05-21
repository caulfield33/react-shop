import {IUser} from "../../models/IUser";

export interface AuthData {
    user: IUser;
    token: string;
    refreshToken: string;
}

export interface AuthState {
    readonly loading: boolean;
    readonly authData: AuthData | null;
    readonly errors: string[];
}

export enum AuthActionTypes {
    LOGIN_REQUEST = "@@auth/LOGIN_REQUEST",
    LOGIN_FAILURE = "@@auth/AUTH_REQUEST_FAILURE",
    LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS",

    REFRESH_TOKEN_REQUEST = "@@auth/REFRESH_TOKEN_REQUEST",
    REFRESH_TOKEN_SUCCESS = "@@auth/REFRESH_TOKEN_SUCCESS",
    REFRESH_TOKEN_FAILURE = "@@auth/AUTH_REQUEST_FAILURE",

    LOGOUT_SUCCESS = "@@auth/LOGOUT_SUCCESS",
    LOGOUT_FAILURE = "@@auth/LOGOUT_FAILURE",
    LOGOUT_REQUEST = "@@auth/LOGOUT_REQUEST",

    CLEAN_ERRORS = "@@auth/CLEAN_ERRORS"
}