import {IStoreItem} from "../../models/IStoreItem";

export type Orders = [
    {
        [itemId: string] : IStoreItem
    }
]
export interface OrderState {
    readonly orders: Orders;
    readonly errors: string[];
    readonly loading: boolean;
}

export enum OrderActionTypes {
    ORDER_REQUEST = "@@cart/ORDER_REQUEST",
    ORDER_FAILURE = "@@cart/ORDER_FAILURE",
    ORDER_SUCCESS = "@@cart/ORDER_SUCCESS",

    GET_ORDER_REQUEST = "@@cart/GET_ORDER_REQUEST",
    GET_ORDER_FAILURE = "@@cart/GET_ORDER_FAILURE",
    GET_ORDER_SUCCESS = "@@cart/GET_ORDER_SUCCESS",

    CLEAR_ORDERS = "@@cart/CLEAR_ORDERS",
}
