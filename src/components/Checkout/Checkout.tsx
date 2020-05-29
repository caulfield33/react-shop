import styled from "styled-components";
import React, {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IApplicationState} from "../../models/IApplicationState";
import StoreItemComponent from "../StoreItemComponent";
import {IStoreItem} from "../../models/IStoreItem";
import {Button} from "../../styled";
import {Redirect} from "react-router";
import {AppContext} from "../../context/app-context";
import {objectToArray} from "../../services/utils";
import {orderRequest} from "../../store/orders/actions";

const Wrapper = styled.div`
    padding: var(--small);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

type Props = {}

const Checkout: React.FC<Props> = () => {

    const [cartItems, setCartItems] = useState([])
    const appContext = useContext(AppContext)
    const dispatch = useDispatch();

    const {items, loading, ordered} = useSelector((state: IApplicationState) => ({
            loading: state.orders.loading,
            ordered: state.cart.ordered,
            items: state.cart.items,
        })
    );

    // eslint-disable-next-line
    useEffect(() => appContext.setContext({loading: loading}), [loading])

    useEffect(() => {
        setCartItems(objectToArray(items) as [])
    }, [items])


    const orderHandler = () => dispatch(orderRequest())
    if (ordered) return <Redirect to="/dashboard"/>

    return (
        <Wrapper>
            <Button onClick={orderHandler}>Order</Button>
            {cartItems.map((item: IStoreItem) => <StoreItemComponent key={item.id} item={item} />) }
        </Wrapper>
    )
}

export default Checkout;
