import {Reducer} from "redux";
import {CartActionTypes, CartState} from "./types";

const storageUser = localStorage.getItem('react-test-app-items')

export const initialState: CartState = {
    items: storageUser ? JSON.parse(storageUser).items : {},
    ordered: false,
    loading: false
};

const reducer: Reducer<CartState> = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM: {
            const newState: any = {...state}
            newState.items[action.payload.id] = action.payload
            localStorage.setItem('react-test-app-items', JSON.stringify(newState))
            return newState;
        }
        case CartActionTypes.REMOVE_ITEM: {
            const newState: any = {...state}
            delete newState.items[action.payload]
            localStorage.setItem('react-test-app-items', JSON.stringify(newState))
            return newState
        }
        case CartActionTypes.CLEAN_CART: {
            localStorage.setItem('react-test-app-items', JSON.stringify({items:{}, ordered: false}))
            return {items: {}, ordered: false, loading: false}
        }
        case CartActionTypes.ORDER_REQUEST: {
            return {...state, loading: true}
        }
        case CartActionTypes.ORDER_SUCCESS: {
            return {...state, ordered: true, loading: false}
        }
        case CartActionTypes.ORDER_FAILURE: {
            return {...state, loading: false, ...action.payload}
        }
        default: {
            return state;
        }
    }
};

export {reducer as CartReducer};
