import {StoreActionTypes} from "./types";
type Error = string;

export const itemRequest = (itemId: string) => ({
    type: StoreActionTypes.ITEMS_REQUEST,
    payload: itemId
});

export const itemsRequest = (page: number = 0) => ({
    type: StoreActionTypes.ITEMS_REQUEST,
    payload: page
});

export const clearItems = () => ({
    type: StoreActionTypes.ITEMS_CLEAR,
})

export const itemsSuccess = (payload: any) => ({
    type: StoreActionTypes.ITEMS_SUCCESS,
    payload: payload
})
export const itemsFailure = (data: Error[]) => ({
    type: StoreActionTypes.ITEMS_FAILURE,
    payload: data
})


