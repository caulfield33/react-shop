import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from "../context/app.context";
import {BoxShadow} from "../styled";

const BackDrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 1051;
	background: #0000004f;
`

const CenteredLoading = styled(BoxShadow)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
	border-radius: 4px;
	padding: 15px 60px;
	div {
		height: auto;
	}
`

const LoadingComponent: React.FC = () => {
    const appContext = useContext(AppContext)

    return appContext.loading ? (
        <BackDrop>
            <CenteredLoading>
                loader
            </CenteredLoading>
        </BackDrop>
    ) : null
}

export default LoadingComponent
