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

    COMPLETE = "@@cart/COMPLETE",

    CLEAN_CART = "@@cart/CLEAN_CART",
}
