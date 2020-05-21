import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header/Header";
import {IHeaderItem} from "../models/IHeaderItem";
import {IApplicationState} from "../models/IApplicationState";
import {connect, useDispatch} from "react-redux";
import {logoutRequest} from "../store/auth/actions";
export const MainWrapper = styled.main``

type Props = {
    isLogged: boolean;
};
const MainLayout: React.FC<Props> = ({ children, isLogged }) => {

    const dispatch = useDispatch()

    const publicItems: IHeaderItem[] = [
        {
            path: '/',
            label: 'Home',
        }
    ]


    const publicActions: IHeaderItem[] = [
        {
            path: '/auth?login',
            label: 'Login',
        },
        {
            path: '/auth?sign-up',
            label: 'Sign Up',
        }
    ]

    const privateItems: IHeaderItem[] = [
        {
            path: '/',
            label: 'Home',
        }
    ]


    const privateActions: IHeaderItem[] = [
        {
            path: '/profile',
            label: 'Profile',
        },
        {
            path: '/dashboard',
            label: 'Dashboard',
            requiredRoles: ['admin']
        },
        {
            path: '/my-store',
            label: 'My Store',
            requiredRoles: ['admin']
        },
        {
            path: '/logout',
            label: 'Logout',
            callback: () => dispatch(logoutRequest()),

        },
    ]

    return (
        <MainWrapper>
            <Header items={isLogged ? privateItems : publicItems} actions={isLogged ? privateActions : publicActions} />
            {children}
        </MainWrapper>
    )
};

const mapStateToProps = ({ auth }: IApplicationState) => ({
    isLogged: !!auth.authData,
});

export default connect(mapStateToProps) (MainLayout);
