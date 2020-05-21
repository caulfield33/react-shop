import styled from 'styled-components'

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--small);
`
export const FormLabel = styled.label<any>`
    margin: var(--small) 0;
`
// TODO fix <any>
export const FormInput = styled.input<any>`
    border: 0;
    border-bottom: 2px solid ${ ({isInvalid}) => isInvalid ? 'var(--error)' : 'var(--grey2)'};
    margin-top: var(--small);
    outline: none;
    padding: var(--small) 0;
    font-size: 14px;
    transition: var(--base-transition);
    
    &:focus, &:active {
        border-bottom: 2px solid var(--primary);
    }
`
export const FormErrorLabel = styled.p`
    color: var(--error);
    margin: 0;
`