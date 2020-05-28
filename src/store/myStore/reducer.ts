import { Reducer } from "redux";
import {MyStoreActionTypes, MyStoreState} from "./types";

export const initialState: MyStoreState = {
    items: [],
    errors: [],
    loading: false,
    pages: 0,
    currentPage: 0,
    totalItems: 0
};

const reducer: Reducer<MyStoreState> = (state = initialState, action) => {
    switch (action.type) {
        case MyStoreActionTypes.ITEMS_CLEAR: {
            return { ...state, items: [] };
        }
        case MyStoreActionTypes.ITEMS_REQUEST: {
            return { ...state, loading: true };
        }
        case MyStoreActionTypes.ITEMS_FAILURE: {
            return { ...state, loading: false, ...action.payload };
        }
        case MyStoreActionTypes.ITEMS_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                items: state.items.concat(action.payload.items),
            };
        }
        case MyStoreActionTypes.CLEAN_ERRORS: {
            return { ...state, loading: false, errors: [] };
        }
        default: {
            return state;
        }
    }
};

export { reducer as myStoreReducer };
