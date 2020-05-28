import {MyStoreActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
import {itemsFailure, itemsSuccess} from "./actions";
import {myItems} from "../../data/myItems";

function* myStoreItemsWorker(action: any) {

    try {
        yield delay(500)

        yield put(itemsSuccess({
            totalItems: myItems.length,
            items: myItems.slice(10 * action.payload, (10 * action.payload) + 10),
            pages: Math.round((myItems.length / 10) + 0.51),
            currentPage: action.payload
        }))

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
