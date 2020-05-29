import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {BoxShadow, Pre, Title} from "../../styled";
import {IApplicationState} from "../../models/IApplicationState";

const Wrapper = styled(BoxShadow)`
    width: fit-content;
    margin: var(--large);
    display: flex;
    flex-direction: column;
    width: auto;
    padding: var(--small);
`;


type Props = {}
const Profile: React.FC<Props> = () => {

    const { authData } = useSelector((state: IApplicationState) => state.auth)

    return (
        <Wrapper>
            <Title>User</Title>
            <Pre>
                {JSON.stringify(authData, null, 2)}
            </Pre>
        </Wrapper>
    )
};

export default Profile;


