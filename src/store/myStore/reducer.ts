import { Reducer } from "redux";
import {MyStoreActionTypes, MyStoreState} from "./types";

export const initialState: MyStoreState = {
    items: [],
    errors: [],
    loading: false
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
            return { ...state, loading: false, items: action.payload };
        }
        case MyStoreActionTypes.ITEMS_SUCCESS: {
            return { ...state, loading: false, items: action.payload };
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
