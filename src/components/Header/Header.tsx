import React from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom'
import HeaderAction from "./HeaderAction";
import HasPermission from "../HasPermission";

const Navigation = styled.nav`
    display: flex; 
    background: var(--grey1);
    padding: 20px;
    justify-content: space-between;
`

const NavList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
`

type Props = {
    items: NavigationItem[];
    actions: NavigationItem[]
};

export interface NavigationItem {
    path?: string;
    label: string;
    callback?: () => void;
    requiredRoles?: string[]
}

const Header: React.FC<Props> = ({items, actions}) => {

    const location = useLocation()

    const handleActiveNav = (path: string | undefined): boolean  =>
        typeof path === 'string' ? `${location.pathname}${location.search}`.includes(path) : false;

    return (
        <Navigation>
            <NavList>
                {
                    items.map((item, index) => (
                        <HasPermission key={index} requiredRoles={item.requiredRoles ? item.requiredRoles : [] }>
                            <HeaderAction
                                active={handleActiveNav(item.path)}
                                path={item.path}
                                label={item.label}
                                callback={item.callback} />
                        </HasPermission>
                    ))
                }
            </NavList>

            <NavList>
                {
                    actions.map((item, index) => (
                        <HasPermission key={index} requiredRoles={item.requiredRoles ? item.requiredRoles : [] }>
                            <HeaderAction
                                active={handleActiveNav(item.path)}
                                path={item.path}
                                label={item.label}
                                callback={item.callback} />
                        </HasPermission>

                    ))
                }
            </NavList>

        </Navigation>
    )
};

export default Header;