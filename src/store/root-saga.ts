import {all} from "redux-saga/effects";
import authWatchers from "./auth/saga";
import myStoreWatchers from "./myStore/saga";
import storeWatchers from "./store/saga";
import orderWatchers from "./orders/saga";

export default function* rootSaga() {
    yield all([
        ...authWatchers,
        ...myStoreWatchers,
        ...storeWatchers,
        ...orderWatchers
    ]);
}
