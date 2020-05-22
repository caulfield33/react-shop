import {IMyStoreItem} from "../../models/IMyStoreItem";

export interface MyStoreState {
    readonly loading: boolean;
    readonly items: IMyStoreItem[];
    readonly errors: string[];
}

export enum MyStoreActionTypes {
    ITEMS_REQUEST = "@@myStore/ITEMS_REQUEST",
    ITEMS_FAILURE = "@@myStore/AUTH_REQUEST_FAILURE",
    ITEMS_SUCCESS = "@@myStore/ITEMS_SUCCESS",

    CLEAN_ERRORS = "@@myStore/CLEAN_ERRORS"
}