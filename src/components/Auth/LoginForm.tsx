import React, {useContext, useEffect, useState} from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {Redirect} from "react-router";
import styled from "styled-components";
import {FormErrorLabel, FormInput, FormLabel, FormRow, Button} from "../../styled";
import {connect, useDispatch} from "react-redux";
import {IApplicationState} from "../../models/IApplicationState";
import {IAuthCredential} from "../../models/IAuthCredential";
import {loginRequest} from "../../store/auth/actions";
import {AppContext} from "../../context/app-context";

const StyledForm = styled(Form)``
const LoginButton = styled(Button)`
    width: fit-content;
    margin: 0 auto;
`
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email')
        .required('Email is required'),
    password: Yup.string()
        .min(4, 'Min 4 symbols')
        .required('Email is required'),
})


type Props = {
    loading: boolean,
    errors: string[],
    isLogged: boolean
}

const LoginForm: React.FC<Props> = React.memo( ({loading, errors: authErrors, isLogged}) => {

    const [values] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();

    const loginHandler = (credential: IAuthCredential) => {
        dispatch(loginRequest(credential))
    }

    const appContext = useContext(AppContext)

    useEffect(() => {
        appContext.setContext({loading: loading})

        // eslint-disable-next-line
    }, [loading])

    if (authErrors?.length > 0) alert(authErrors)
    if (isLogged) return <Redirect to="/dashboard"/>

    return (
        <Formik
            initialValues={values}
            validationSchema={LoginSchema}
            onSubmit={loginHandler}>
            {({
                  values,
                  errors: formErrors,
                  handleChange,
              }) => {
                return (
                    <StyledForm>

                        <FormRow>
                            <FormLabel htmlfor="email">Email</FormLabel>
                            <FormInput
                                value={values.email}
                                type="email"
                                id="email"
                                onChange={handleChange}
                                isInvalid={!!formErrors.email}
                                name="email"/>
                            <FormErrorLabel>{formErrors.email}</FormErrorLabel>
                        </FormRow>
                        <FormRow>
                            <FormLabel htmlfor="email">Password</FormLabel>
                            <FormInput
                                type="password"
                                value={values.password}
                                id="password"
                                onChange={handleChange}
                                isInvalid={!!formErrors.password}
                                name="password"/>
                            <FormErrorLabel>{formErrors.password}</FormErrorLabel>
                        </FormRow>

                        <FormRow>
                            <LoginButton type="submit">Login</LoginButton>
                        </FormRow>
                    </StyledForm>
                )
            }}
        </Formik>
    )
});

const mapStateToProps = ({auth}: IApplicationState) => ({
    loading: auth.loading,
    errors: auth.errors,
    isLogged: !!auth.authData
});

export default connect(mapStateToProps)(LoginForm);
