import {takeEvery, put, delay, select} from 'redux-saga/effects';
import { AnyAction } from "redux";
import {OrderActionTypes} from "./types";
import {
    getOrdersFailure,
    getOrdersSuccess,
    orderFailure,
    orderSuccess
} from "./actions";
import {IApplicationState} from "../../models/IApplicationState";
import {clearCart, orderComplete} from "../cart/actions";

function* createOrderWorker(action: AnyAction) {

    try {
        yield delay(500)
        const items = yield select((state: IApplicationState) => state.cart.items);
        let storageOrders: any = localStorage.getItem('test-app-orders')
        storageOrders = storageOrders ? JSON.parse(storageOrders) : []
        storageOrders.push(items)
        localStorage.setItem('test-app-orders', JSON.stringify(storageOrders))
        yield put(orderSuccess())
        yield put(clearCart())
        yield put(orderComplete())

    } catch (e) {
        console.log(e)
        yield put(orderFailure())
    }

}

function* getOrdersWorker(action: AnyAction) {

    try {
        yield delay(500)
        const storageUser = localStorage.getItem('test-app-orders')
        yield put(getOrdersSuccess(storageUser ? JSON.parse(storageUser) : []))
    } catch (e) {
        console.log(e)
        yield put(getOrdersFailure())
    }

}



export function* watchOrders() {
    yield takeEvery(OrderActionTypes.ORDER_REQUEST, createOrderWorker)
    yield takeEvery(OrderActionTypes.GET_ORDER_REQUEST, getOrdersWorker)
}

const orderWatchers = [
    watchOrders()
]

export default orderWatchers;
