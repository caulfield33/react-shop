import {MyStoreActionTypes} from "./types";
import {takeEvery, put, call, delay} from 'redux-saga/effects';
import ShopService from "../../services/shop-service";
import {itemsFailure, itemsSuccess} from "./actions";
import {items} from "../../data/items";

const shopService = new ShopService()

function* myStoreItemsWorker() {

    try {
        yield delay(1000)

        yield put(itemsSuccess(items))

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