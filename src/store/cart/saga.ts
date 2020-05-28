import {takeEvery, put, delay, select} from 'redux-saga/effects';
import { AnyAction } from "redux";
import {CartActionTypes} from "./types";
import {clearCart, orderFailure, orderSuccess} from "./actions";
import {IApplicationState} from "../../models/IApplicationState";
import {objectToArray} from "../../services/utils";
import {updateOrders} from "../auth/actions";

function* cartOrderWorker(action: AnyAction) {

    try {
        yield delay(500)
        const items = yield select((state: IApplicationState) => state.cart.items);
        yield put(orderSuccess())
        yield put(updateOrders(items))
        yield put(clearCart())

    } catch (e) {
        console.log(e)
        yield put(orderFailure())
    }

}


export function* watchCart() {
    yield takeEvery(CartActionTypes.ORDER_REQUEST, cartOrderWorker)
}

const cartWatchers = [
    watchCart()
]

export default cartWatchers;
