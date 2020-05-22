import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {connect, useDispatch} from "react-redux";
import {IApplicationState} from "../../models/IApplicationState";
import {AppContext} from "../../context/app-context";
import {itemsRequest} from "../../store/store/actions";
import StoreItemCard, {StoreItemCardProps} from "../StoreItem";
import {StoreState} from "../../store/store/types";
import {IStoreItem} from "../../models/IStoreItem";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

type Props = {} & StoreState

const Home: React.FC<Props> = ({loading, items, errors}) => {
    const dispatch = useDispatch();

    const appContext = useContext(AppContext)

    useEffect(() => {
        dispatch(itemsRequest())

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        appContext.setContext({loading: loading})

        // eslint-disable-next-line
    }, [loading])

    const addToCartHandler = (itemId: number) => {
        console.log(itemId)
    }

    return (
        <Wrapper>
            {items.length === 0 ? (
                <p>No items</p>
            ) : (
                items.map((item, index) => {
                    const props: StoreItemCardProps = {
                        addToCart: addToCartHandler,
                        item: item
                    }

                    return  (
                        <StoreItemCard {...props} key={index}/>
                    )
                })
            )}

        </Wrapper>
    )
};

const mapStateToProps = ({store}: IApplicationState) => store

export default connect(mapStateToProps) (Home);

