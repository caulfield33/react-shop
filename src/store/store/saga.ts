import {StoreActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
// import ShopService from "../../services/shop-service";
import {itemsFailure, itemsSuccess} from "./actions";
import {items} from "../../data/items";

// const shopService = new ShopService()

function* storeItemsWorker(action: any) {

    try {

        const itemsToReturn = items.slice(10 * action.payload, (10 * action.payload) + 10)

        yield delay(500)

        yield put(itemsSuccess({items: itemsToReturn, pages: Math.round((items.length / 10) + 0.51) }))


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
