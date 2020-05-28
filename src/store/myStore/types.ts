import {IMyStoreItem} from "../../models/IMyStoreItem";
import {StoreState} from "../store/types";

export interface MyStoreState extends StoreState{
    readonly items: IMyStoreItem[];
}

export enum MyStoreActionTypes {
    ITEMS_REQUEST = "@@myStore/ITEMS_REQUEST",
    ITEMS_FAILURE = "@@myStore/AUTH_REQUEST_FAILURE",
    ITEMS_SUCCESS = "@@myStore/ITEMS_SUCCESS",
    ITEMS_CLEAR   = "@@myStore/ITEMS_CLEAR",

    CLEAN_ERRORS = "@@myStore/CLEAN_ERRORS"
}
