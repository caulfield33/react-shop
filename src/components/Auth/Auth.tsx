import React from 'react';
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import {BoxShadow} from "../../styled";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Wrapper = styled.div``

const FormWrapper = styled(BoxShadow)`
    width: fit-content;
    margin: 5em auto;
    width: 500px;
`

const Auth: React.FC = () => {

    const { search } = useLocation()

    return (
        <Wrapper>
            <FormWrapper>
                {search.includes('login') ? <LoginForm /> : <SignUpForm />}
            </FormWrapper>
        </Wrapper>
    )
};

export default Auth;