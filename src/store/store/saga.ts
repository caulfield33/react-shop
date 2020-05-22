import {StoreActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
// import ShopService from "../../services/shop-service";
import {itemsFailure, itemsSuccess} from "./actions";
import {items} from "../../data/items";

// const shopService = new ShopService()

function* storeItemsWorker() {

    try {
        yield delay(1000)

        yield put(itemsSuccess(items))

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