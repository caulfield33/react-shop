import {CartActionTypes} from "./types";
import {IStoreItem} from "../../models/IStoreItem";

export const addItemToCart = (item: IStoreItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemFromCart = (itemId: string) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: itemId
})
export const clearCart = () => ({
    type: CartActionTypes.CLEAN_CART,
})

export const orderRequest = () => ({
    type: CartActionTypes.ORDER_REQUEST,
})

export const orderSuccess = () => ({
    type: CartActionTypes.ORDER_SUCCESS,
})

export const orderFailure = () => ({
    type: CartActionTypes.ORDER_FAILURE,
})


