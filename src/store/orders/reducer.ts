import {Reducer} from "redux";
import { OrderActionTypes, OrderState} from "./types";


export const initialState: OrderState = {
    orders: [] as any,
    errors: [],
    loading: false,
};

const reducer: Reducer<OrderState> = (state = initialState, action) => {
    switch (action.type) {
        case OrderActionTypes.GET_ORDER_REQUEST:
        case OrderActionTypes.ORDER_REQUEST: {
            return {...state, loading: true}
        }
        case OrderActionTypes.ORDER_SUCCESS: {
            return {...state, loading: false}
        }
        case OrderActionTypes.GET_ORDER_FAILURE:
        case OrderActionTypes.ORDER_FAILURE: {
            return {...state, loading: false, ...action.payload}
        }
        case OrderActionTypes.CLEAR_ORDERS: {
            return initialState
        }
        case OrderActionTypes.GET_ORDER_SUCCESS: {
            return {...state, loading: false, orders: action.payload}
        }
        default: {
            return state;
        }
    }
};

export {reducer as OrderReducer};
