import {StoreActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
import {itemsFailure, itemsSuccess} from "./actions";
import {items} from "../../data/items";
import { AnyAction } from "redux";

function* storeItemsWorker(action: AnyAction) {

    try {

        const itemPerPage = 5;

        yield delay(500)

        if (typeof action.payload === "string") {
            const filteredItems = items.filter(i => i.id === Number(action.payload))

            yield put(itemsSuccess({
                totalItems:items.length,
                items: filteredItems,
                pages: Math.round((items.length / itemPerPage) + 0.51),
                currentPage: 0
            }))
        } else {
            const itemsToReturn = items.slice(itemPerPage * action.payload, (itemPerPage * action.payload) + itemPerPage)


            yield put(itemsSuccess({
                totalItems:items.length,
                items: itemsToReturn,
                pages: Math.round((items.length / itemPerPage) + 0.51),
                currentPage: action.payload
            }))
        }


    } catch (e) {
        console.log(e)
        yield put(itemsFailure(['error']))
    }

}


export function* watchStore() {
    yield takeEvery(StoreActionTypes.ITEMS_REQUEST, storeItemsWorker)
}

const storeWatchers = [
    watchStore()
]

export default storeWatchers;
