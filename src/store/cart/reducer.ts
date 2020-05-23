import {Reducer} from "redux";
import {CartActionTypes, CartState} from "./types";

const storageUser = localStorage.getItem('react-test-app-items')

export const initialState: CartState = {
    items: storageUser ? JSON.parse(storageUser).items : {}
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
            localStorage.setItem('react-test-app-items', JSON.stringify({items:{}}))
            return {items: {}}
        }
        default: {
            return state;
        }
    }
};

export {reducer as CartReducer};
