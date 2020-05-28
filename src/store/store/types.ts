import {IStoreItem} from "../../models/IStoreItem";

export interface StoreState {
    readonly loading: boolean;
    readonly items: IStoreItem[];
    readonly errors: string[];
    readonly pages: number;
    readonly currentPage: number;
}

export enum StoreActionTypes {
    ITEMS_REQUEST = "@@store/ITEMS_REQUEST",
    ITEMS_FAILURE = "@@store/AUTH_REQUEST_FAILURE",
    ITEMS_SUCCESS = "@@store/ITEMS_SUCCESS",
    ITEMS_CLEAR   = "@@store/ITEMS_CLEAR",

    CLEAN_ERRORS = "@@store/CLEAN_ERRORS"
}
