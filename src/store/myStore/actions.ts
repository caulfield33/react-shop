import {MyStoreActionTypes} from "./types";
import {IMyStoreItem} from "../../models/IMyStoreItem";

type Error = string;

export const itemsRequest = () => ({
    type: MyStoreActionTypes.ITEMS_REQUEST,
});

export const clearItems = () => ({
    type: MyStoreActionTypes.ITEMS_CLEAR,
})

export const itemsSuccess = (items: IMyStoreItem[]) => ({
    type: MyStoreActionTypes.ITEMS_SUCCESS,
    payload: items
})
export const itemsFailure = (data: Error[]) => ({
    type: MyStoreActionTypes.ITEMS_FAILURE,
    payload: data
})


