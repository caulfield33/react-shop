import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {IApplicationState} from "../../models/IApplicationState";
import {itemsRequest, clearItems} from "../../store/store/actions";
import StoreItemCard from "../StoreItem";
import {IStoreItem} from "../../models/IStoreItem";
import {addItemToCart, removeItemFromCart} from "../../store/cart/actions";
import {AppContext} from "../../context/app-context";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

type Props = {}

const Home: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const [homeItems, setHomeItems] = useState()
    const appContext = useContext(AppContext)
    const {items, loading, currentPage} = useSelector((state: IApplicationState) => state.store);


    useEffect(() => {
        dispatch(itemsRequest(currentPage))

        return () => {
            dispatch(clearItems())
        }
        // eslint-disable-next-line
    }, [])

    // eslint-disable-next-line
    useEffect(() => appContext.setContext({loading: loading}), [loading])

    const addToCartHandler = (item: IStoreItem) => dispatch(addItemToCart(item));
    const removeItemFromCartHandler = (itemId: number) => dispatch(removeItemFromCart(`${itemId}`));
    // const loadingHandler = () => dispatch(itemsRequest(currentPage + 1));

    useEffect(() => {
        setHomeItems(items.map((item, index) => (
            <StoreItemCard
                item={item}
                addToCart={addToCartHandler}
                removeFromCart={removeItemFromCartHandler}
                key={index}/>
        )))
        // eslint-disable-next-line
    }, [items])

    return (
        <Wrapper>
            {items.length === 0 ? (
                <p>No items</p>
            ) : homeItems}
        </Wrapper>
    )
}


export default Home;

