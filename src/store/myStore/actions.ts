import {MyStoreActionTypes} from "./types";
import {IMyStoreItem} from "../../models/IMyStoreItem";
type Error = string;

export const itemsRequest = (page: number) => ({
    type: MyStoreActionTypes.ITEMS_REQUEST,
    payload: page
});


export const clearItems = () => ({
    type: MyStoreActionTypes.ITEMS_CLEAR,
})


export type ItemSuccessPayload = {
    items: IMyStoreItem[],
    currentPage: number;
    totalItems: number;
    pages: number;
}
export const itemsSuccess = (payload: ItemSuccessPayload) => ({
    type: MyStoreActionTypes.ITEMS_SUCCESS,
    payload: payload
})


export const itemsFailure = (data: Error[]) => ({
    type: MyStoreActionTypes.ITEMS_FAILURE,
    payload: data
})


