import React, {useState} from 'react'
import styled from "styled-components";
import {BoxShadow} from "../../styled";
import HeaderAction from "../Header/HeaderAction";

const Wrapper = styled.div`
    position: relative;
`

const CartBody = styled(BoxShadow)`
    position: absolute;
    right: 0;
    padding: var(--small);
    background: white;
`

type Props = {

}

const Cart: React.FC<Props> = () => {

    const [isOpen, setOpen] = useState(false)

    const openCartHandler = () => setOpen(prevState => !prevState)

    return (
        <Wrapper>
            <HeaderAction active={isOpen} label={'Cart'} callback={openCartHandler}/>
            {isOpen && (
                <CartBody>
                    open
                </CartBody>
            )}
        </Wrapper>
    )
}

export default Cart
