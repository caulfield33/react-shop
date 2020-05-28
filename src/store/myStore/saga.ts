import {MyStoreActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
import {itemsFailure, itemsSuccess} from "./actions";
import {items} from "../../data/items";

function* myStoreItemsWorker(action: any) {

    try {
        const itemsToReturn = items.slice(10 * action.payload, (10 * action.payload) + 10)

        yield delay(500)

        yield put(itemsSuccess({items: itemsToReturn,  pages: Math.round((items.length / 10) + 0.51) }))

    } catch (e) {
        console.log(e)
        yield put(itemsFailure(['error']))
    }

}


export function* watchMyStore() {
    yield takeEvery(MyStoreActionTypes.ITEMS_REQUEST, myStoreItemsWorker)
}

const myStoreWatchers = [
    watchMyStore()
]

export default myStoreWatchers;
