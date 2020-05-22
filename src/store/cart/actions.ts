import {MyStoreActionTypes} from "./types";
import {IStoreItem} from "../../models/IStoreItem";

type Error = string;

export const itemsRequest = () => ({
    type: MyStoreActionTypes.ITEMS_REQUEST,
});

export const itemsSuccess = (items: IStoreItem[]) => ({
    type: MyStoreActionTypes.ITEMS_SUCCESS,
    payload: items
})
export const itemsFailure = (data: Error[]) => ({
    type: MyStoreActionTypes.ITEMS_FAILURE,
    payload: data
})


