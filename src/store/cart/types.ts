import {IStoreItem} from "../../models/IStoreItem";

export interface CartState {
    readonly items: {
        [itemId: string] : IStoreItem
    };
    readonly ordered: boolean;
    readonly loading: boolean;
}

export enum CartActionTypes {
    ADD_ITEM = "@@cart/ADD_ITEM",
    REMOVE_ITEM = "@@cart/REMOVE_ITEM",

    ORDER_REQUEST = "@@cart/ORDER_REQUEST",
    ORDER_FAILURE = "@@cart/ORDER_FAILURE",
    ORDER_SUCCESS = "@@cart/ORDER_SUCCESS",

    CLEAN_CART = "@@cart/CLEAN_CART",
}
