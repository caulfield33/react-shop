import {StoreActionTypes} from "./types";
import {IStoreItem} from "../../models/IStoreItem";

type Error = string;

export const itemsRequest = () => ({
    type: StoreActionTypes.ITEMS_REQUEST,
});

export const itemsSuccess = (items: IStoreItem[]) => ({
    type: StoreActionTypes.ITEMS_SUCCESS,
    payload: items
})
export const itemsFailure = (data: Error[]) => ({
    type: StoreActionTypes.ITEMS_FAILURE,
    payload: data
})


