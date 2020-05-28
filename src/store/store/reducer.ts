import { Reducer } from "redux";
import {StoreActionTypes, StoreState} from "./types";

export const initialState: StoreState = {
    items: [],
    errors: [],
    loading: false,
    pages: 0,
    currentPage: 0
};

const reducer: Reducer<StoreState> = (state = initialState, action) => {
    switch (action.type) {
        case StoreActionTypes.ITEMS_REQUEST: {
            return { ...state, loading: true };
        }
        case StoreActionTypes.ITEMS_CLEAR: {
            return { ...state, items: [] };
        }
        case StoreActionTypes.ITEMS_FAILURE: {
            return { ...state, loading: false, ...action.payload };
        }
        case StoreActionTypes.ITEMS_SUCCESS: {
            return { ...state, loading: false, ...action.payload };
        }
        case StoreActionTypes.CLEAN_ERRORS: {
            return { ...state, loading: false, errors: [] };
        }
        default: {
            return state;
        }
    }
};

export { reducer as StoreReducer };
