import {Reducer} from "redux";
import {CartActionTypes, CartState} from "./types";

const storageUser = localStorage.getItem('test-app-cart')

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
            localStorage.setItem('test-app-cart', JSON.stringify(newState))
            return newState;
        }
        case CartActionTypes.REMOVE_ITEM: {
            const newState: any = {...state}
            delete newState.items[action.payload]
            localStorage.setItem('test-app-cart', JSON.stringify(newState))
            return newState
        }
        case CartActionTypes.CLEAN_CART: {
            localStorage.setItem('test-app-cart', JSON.stringify({items:{}, ordered: false}))
            return {items: {}, ordered: false, loading: false}
        }
        case CartActionTypes.COMPLETE: {
            return {...state, ordered: true}
        }
        default: {
            return state;
        }
    }
};

export {reducer as CartReducer};
