import {MyStoreActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
// import ShopService from "../../services/shop-service";
import {itemsFailure, itemsSuccess} from "./actions";
import {myItems} from "../../data/myItems";

// const shopService = new ShopService()

function* myStoreItemsWorker() {

    try {
        yield delay(500)

        yield put(itemsSuccess(myItems))

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