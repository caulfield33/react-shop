import {OrderActionTypes, Orders} from "./types";

export const orderRequest = () => ({
    type: OrderActionTypes.ORDER_REQUEST,
})
export const orderSuccess = () => ({
    type: OrderActionTypes.ORDER_SUCCESS,
})
export const orderFailure = () => ({
    type: OrderActionTypes.ORDER_FAILURE,
})


export const getOrdersSuccess = (orders: Orders) => ({
    type: OrderActionTypes.GET_ORDER_SUCCESS,
    payload: orders
})
export const getOrdersFailure = () => ({
    type: OrderActionTypes.GET_ORDER_FAILURE,
})
export const getOrdersRequest = () => ({
    type: OrderActionTypes.GET_ORDER_REQUEST,
})

export const clearOrders = () => ({
    type: OrderActionTypes.CLEAR_ORDERS,
})

