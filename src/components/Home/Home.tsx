import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {connect, useDispatch} from "react-redux";
import {IApplicationState} from "../../models/IApplicationState";
import {itemsRequest, clearItems} from "../../store/store/actions";
import StoreItemCard from "../StoreItem";
import {StoreState} from "../../store/store/types";
import {IStoreItem} from "../../models/IStoreItem";
import {addItemToCart, removeItemFromCart} from "../../store/cart/actions";
import {AppContext} from "../../context/app-context";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

type Props = {
    cartItems: { [itemId: string]: IStoreItem }
} & StoreState

const Home: React.FC<Props> = React.memo(({loading, items, errors, cartItems}) => {
    const dispatch = useDispatch();

    const appContext = useContext(AppContext)

    useEffect(() => {
        dispatch(itemsRequest())

        return () => {
            dispatch(clearItems())
        }
    }, [dispatch])

    // eslint-disable-next-line
    useEffect(() => appContext.setContext({loading: loading}), [loading])

    const addToCartHandler = (item: IStoreItem) => {
        dispatch(addItemToCart(item))
    }

    const removeItemFromCartHandler = (itemId: number) => {
        dispatch(removeItemFromCart(`${itemId}`))
    }

    return (
        <Wrapper>
            {items.length === 0 ? (
                <p>No items</p>
            ) : (
                items.map((item, index) => (
                    <StoreItemCard
                        item={item}
                        addToCart={addToCartHandler}
                        removeFromCart={removeItemFromCartHandler}
                        key={index}/>
                ))
            )}

        </Wrapper>
    )
}, (prevProps, nextProps) => (prevProps === nextProps));


const mapStateToProps = ({store, cart}: IApplicationState) => ({
    ...store,
    cartItems: cart.items
})

export default connect(mapStateToProps)(Home);

