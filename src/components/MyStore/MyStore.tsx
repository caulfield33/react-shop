import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {connect, useDispatch} from "react-redux";
import {IApplicationState} from "../../models/IApplicationState";
import {MyStoreState} from "../../store/myStore/types";
import {AppContext} from "../../context/app-context";
import {clearItems, itemsRequest} from "../../store/myStore/actions";
import StoreItemCard from "../StoreItem";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

type Props = {} & MyStoreState
const MyStore: React.FC<Props> = ({loading, items, errors}) => {
    const dispatch = useDispatch();

    const appContext = useContext(AppContext)

    useEffect(() => {
        dispatch(itemsRequest())

        return () => {
            dispatch(clearItems())
        }
    }, [dispatch])

    useEffect(() => {
        appContext.setContext({loading: loading})

        // eslint-disable-next-line
    }, [loading])

    return (
        <Wrapper>
            {items.length === 0 ? (
                <p>No items</p>
            ) : (
                items.map((item, index) => (
                    <StoreItemCard item={item} key={index} addToCart={() => {}} removeFromCart={() =>{}}/>
                ))
            )}

        </Wrapper>
    )
};

const mapStateToProps = ({myStore}: IApplicationState) => myStore

export default connect(mapStateToProps) (MyStore);

