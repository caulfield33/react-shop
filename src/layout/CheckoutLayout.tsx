import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header/Header";
import {IHeaderItem} from "../models/IHeaderItem";
import { useDispatch} from "react-redux";
import {logoutRequest} from "../store/auth/actions";
export const MainWrapper = styled.main``

type Props = {};
const CheckoutLayout: React.FC<Props> = ({ children }) => {

    const dispatch = useDispatch()


    const items: IHeaderItem[] = [
        {
            path: '/',
            label: 'Home',
        }
    ]


    const actions: IHeaderItem[] = [
        {
            callback: () => console.log('back'),
            label: 'Back',
        },
        {
            path: '/logout',
            label: 'Logout',
            callback: () => dispatch(logoutRequest()),

        },
    ]

    return (
        <MainWrapper>
            <Header items={items} actions={actions} />
            {children}
        </MainWrapper>
    )
};


export default CheckoutLayout;
