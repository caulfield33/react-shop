import {IStoreItem} from "../../models/IStoreItem";

export interface CartState {
    readonly items: {
        [itemId: string] : IStoreItem
    };
}

export enum CartActionTypes {
    ADD_ITEM = "@@cart/ADD_ITEM",
    REMOVE_ITEM = "@@cart/REMOVE_ITEM",

    CLEAN_CART = "@@cart/CLEAN_CART",
}