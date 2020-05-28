import {StoreActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
import {itemsFailure, itemsSuccess} from "./actions";
import {items} from "../../data/items";
import { AnyAction } from "redux";

function* storeItemsWorker(action: AnyAction) {

    try {

        const itemsToReturn = items.slice(10 * action.payload, (10 * action.payload) + 10)

        yield delay(500)

        yield put(itemsSuccess({
            totalItems:items.length,
            items: itemsToReturn,
            pages: Math.round((items.length / 10) + 0.51),
            currentPage: action.payload
        }))


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
