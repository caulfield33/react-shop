import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {NavigationItem} from "./Header";

const NavItemLabel = styled.div<{ active?: boolean }>`
	opacity: ${({active}) => active ? 1 : 0.6};
	transition: var(--base-transition);
	
	&:hover {
	    opacity: ${({active}) => active ? 1 : 0.8};
	}
`

const NavItemWrapper = styled.li`
	font-weight: lighter;
	font-size: 1em;
	margin-left: 1em;
	cursor: pointer;
`


interface HeaderNavigationItem extends NavigationItem  {
    active?: boolean;
}

type Props = HeaderNavigationItem;

const HeaderAction: React.FC<Props> = React.memo(({active, path = '', label, callback}) => (
    <NavItemWrapper>
        {callback ? (
            <NavItemLabel onClick={callback} active={active !== undefined ? active : false}>
                {label}
            </NavItemLabel>
        ) : (
            <NavItemLabel active={active}>
                <Link to={path}>{label}</Link>
            </NavItemLabel>
        )}

    </NavItemWrapper>
))

export default HeaderAction;