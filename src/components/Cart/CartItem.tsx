import React from 'react'
import styled from "styled-components";
import {IStoreItem} from "../../models/IStoreItem";
import {BoxShadow, Button} from "../../styled";

const Wrapper = styled(BoxShadow)`
    display: flex;
    align-items: center;
    margin: 5px 0;
    padding: 0 10px;
`

const ItemImage = styled.img`
    max-width: 40px;
`

const ItemName= styled.p`
    flex-grow: 1;
    width: 150px;
    padding: 0 10px;
`

const RemoveButton = styled(Button)`
    height: fit-content;
`


type Props = {
    item: IStoreItem
    removeItem: (itemId: number) => void;
}

const CartItem: React.FC<Props> = ({item, removeItem}) => {

    return (
        <Wrapper>
            <ItemImage src={'https://via.placeholder.com/200'}/>

            <ItemName>{item.name}</ItemName>

            <RemoveButton color={'var(--error)'} onClick={() => removeItem(item.id)}>Remove</RemoveButton>
        </Wrapper>
    )
}

export default CartItem
