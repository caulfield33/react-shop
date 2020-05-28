import {MyStoreActionTypes} from "./types";
type Error = string;

export const itemsRequest = (page: number) => ({
    type: MyStoreActionTypes.ITEMS_REQUEST,
    payload: page
});

export const clearItems = () => ({
    type: MyStoreActionTypes.ITEMS_CLEAR,
})

export const itemsSuccess = (payload: any) => ({
    type: MyStoreActionTypes.ITEMS_SUCCESS,
    payload: payload
})
export const itemsFailure = (data: Error[]) => ({
    type: MyStoreActionTypes.ITEMS_FAILURE,
    payload: data
})


