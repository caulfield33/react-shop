import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {BoxShadow, Pre, Title} from "../../styled";
import {clearOrders, getOrdersRequest} from "../../store/orders/actions";
import {IApplicationState} from "../../models/IApplicationState";
import {AppContext} from "../../context/app-context";

const Wrapper = styled(BoxShadow)`
    width: fit-content;
    margin: var(--large);
    display: flex;
    flex-direction: column;
    width: auto;
    padding: var(--small);
`;

type Props = {}
const Dashboard: React.FC<Props> = () => {

    const dispatch = useDispatch();

    const { orders, loading } = useSelector((state: IApplicationState) => state.orders)

    const appContext = useContext(AppContext)

    // eslint-disable-next-line
    useEffect(() => appContext.setContext({loading: loading}), [loading])

    useEffect(() => {
        dispatch(getOrdersRequest())

        return () => {
            dispatch(clearOrders())
        }
        // eslint-disable-next-line
    }, [])


    return (
        <Wrapper>
            <Title>Orders</Title>
            {orders.map(order => (
                <Pre>
                    {JSON.stringify(order,  null, 2)}
                </Pre>
            ))}

        </Wrapper>
    )
};

export default Dashboard;


