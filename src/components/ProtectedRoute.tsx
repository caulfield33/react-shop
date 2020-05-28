import {Redirect, Route, RouteComponentProps} from 'react-router-dom';
import React from "react";
import {connect} from "react-redux";
import {AuthData} from "../store/auth/types";
import MainLayout from "../layout/MainLayout";
import {IApplicationState} from "../models/IApplicationState";
import NoPermissionPage from "../containers/NoPermissionPage";
import {IRoute} from "../models/IRoute";
import HomePage from "../containers/HomePage";
import AuthPage from "../containers/AuthPage";
import ProfilePage from "../containers/ProfilePage";
import MyStorePage from "../containers/MyStorePage";
import DashboardPage from "../containers/DashboardPage";
import CheckoutLayout from "../layout/CheckoutLayout";
import CheckoutPage from "../containers/CheckoutPage";
import StoreItemPage from "../containers/StoreItemPage";

export const appRoutes: IRoute[] = [
    {
        component: HomePage,
        path: '/',
        layout: MainLayout,
        isPublic: true,
        allowedForLogged: true,
    },
    {
        component: AuthPage,
        path: '/auth',
        isPublic: true,
        layout: MainLayout,
        allowedForLogged: false,
    },
    {
        component: ProfilePage,
        path: '/profile',
        layout: MainLayout,
        isPublic: false,
        allowedForLogged: true,
    },
    {
        component: MyStorePage,
        path: '/my-store',
        isPublic: false,
        layout: MainLayout,
        requiredRoles: ['admin'],
        allowedForLogged: true,
    },
    {
        component: DashboardPage,
        path: '/dashboard',
        layout: MainLayout,
        isPublic: false,
        allowedForLogged: true,
    },
    {
        component: CheckoutPage,
        path: '/checkout',
        layout: CheckoutLayout,
        isPublic: false,
        allowedForLogged: true,
    },
    {
        component: StoreItemPage,
        path: '/item/:itemId',
        layout: MainLayout,
        isPublic: true,
        allowedForLogged: true,
    }
]

interface Props {
    Component: React.FC<RouteComponentProps>;
    Layout: React.FC<{isLogged: boolean}>;
    isPublic?: boolean;
    allowedForLogged: boolean;
    authData?: AuthData | null;
    path: string;
    exact?: boolean;
    requiredRoles?: string[]
}

const ProtectedRoute = ({Layout, Component, path, exact = false, authData, requiredRoles, isPublic, allowedForLogged}: Props): JSX.Element => (
    <Route
        exact={exact}
        path={path}
        render={(props: RouteComponentProps) => {

            const content = (
                <Layout isLogged={!!(authData! && authData!.user)}>
                    <Component {...props} />
                </Layout>
            )

            const hasPermission = !requiredRoles ? true : authData && authData.user.roles.some(item => requiredRoles.includes(item))

            if (isPublic && (allowedForLogged ? true : !(authData && authData.user && hasPermission))) return content

            return authData && authData.user ? !hasPermission ?
                <NoPermissionPage requiredRoles={requiredRoles ? requiredRoles : []}/> : content : (
                <Redirect
                    to={{
                        pathname: '/auth',
                        search: 'login'
                    }}
                />
            )
        }}
    />
)

const mapStateToProps = ({auth}: IApplicationState) => ({
    authData: auth.authData
});

export default connect(mapStateToProps)(ProtectedRoute);