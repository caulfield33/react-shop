import {StoreActionTypes} from "./types";
import {IStoreItem} from "../../models/IStoreItem";

type Error = string;
type ItemId = string;
type Page = number;

export const itemRequest = (itemId: ItemId) => ({
    type: StoreActionTypes.ITEMS_REQUEST,
    payload: itemId
});

export const itemsRequest = (page: Page = 0) => ({
    type: StoreActionTypes.ITEMS_REQUEST,
    payload: page
});


export const clearItems = () => ({
    type: StoreActionTypes.ITEMS_CLEAR,
})


export type ItemSuccessPayload = {
    items: IStoreItem[],
    currentPage: number;
    totalItems: number;
    pages: number;
}
export const itemsSuccess = (payload: ItemSuccessPayload) => ({
    type: StoreActionTypes.ITEMS_SUCCESS,
    payload: payload
})


export const itemsFailure = (data: Error[]) => ({
    type: StoreActionTypes.ITEMS_FAILURE,
    payload: data
})


