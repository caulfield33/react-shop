import styled from 'styled-components'

export const Button = styled.button<any>`
    font-size: var(--medium);
    border-radius: var(--base-radius);
    border: 0.2em solid ${ ({color}) => color ? color : 'var(--primary)'};
    background: white;
    cursor: pointer;
`